import React,{ useState, useEffect } from 'react';
import './App.css';
import PrayersList from './components/PrayersList';
import axios from 'axios';

function App() {

  let initialState = {
    time : '',
    date : '',
    meta : '',
    islamic : ''
  }
  const [state, setstate] = useState(initialState);

  useEffect( ()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition( (location)=>{
        // console.log(location);
        let d = new Date();
        let date = d.getDay()+1;
        let month = d.getMonth()+1;
        let year = d.getFullYear();
        axios.get(`https://api.aladhan.com/v1/calendar?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}&method=2&month=${month}&year=${year}`)
        .then( res=>{
            let namazTime = res.data.data[date];
            console.log(namazTime);
            setstate({
              meta : namazTime.meta,
              time : namazTime.timings,
              date : namazTime.date,
            });
        })
        .catch( err=>{
            console.log(err);
        });
        
      })
    }
    
  },[]);

  return (
    <div className='background'>
      <PrayersList meta={state.meta} time={state.time} date={state.date} />
    </div>
  );
}

export default App;
