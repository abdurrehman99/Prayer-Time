import React,{ useState, useEffect } from 'react';
import './App.css';
import PrayersList from './components/PrayersList';
import axios from 'axios';

function App() {

  let initialState = {
    time : '',
    date : '',
    meta : '',
    currentDate : ''
  }
  const [state, setstate] = useState(initialState);

  useEffect( ()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition( (location)=>{
        axios.get(`http://api.aladhan.com/v1/timings/${location.timestamp}?latitude=${location.coords.latitude}&longitude=${location.coords.longitude}&method=1`)
        .then( res=>{
            console.log(res.data);
            let {data} = res.data
            setstate({
              meta : data.meta,
              time : data.timings,
              date : data.date,
              currentDate : new Date,
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
      {
        console.log(state.currentDate)
      }
      <PrayersList meta={state.meta} time={state.time} date={state.date} />
    </div>
  );
}

export default App;
