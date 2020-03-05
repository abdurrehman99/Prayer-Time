import React,{ useState,useEffect } from 'react';
import { Container, Row, Col,Card,CardBody } from 'reactstrap';
import { Spin } from "react-loading-io";
import axios from 'axios';

const PrayersList = (props) => {

    var initialState = {
        hijri : ''
    }
    console.log(props);
    const [state, setstate] = useState(initialState);

    useEffect(() => {
        let d = new Date();
        let date = d.getDay()+1;
        let month = d.getMonth()+1;
        let year = d.getFullYear();
        axios.get(`http://api.aladhan.com/v1/gToH?date=${date}-${month}-${year}`)
        .then( res=>{
            // console.log(res.data.data);
            setstate({
                hijri : res.data.data.hijri
            });
        })
        .catch( err=>{
            console.log(err)
        });
    }, [])
    return (
        <Container>
            {
                props.meta === '' ? <div className='spinner text-center'><Spin size={110} color={"white"} /></div>
                :
                <React.Fragment>
                    <h1 className='text-center text-white pt-4 mb-4 border-bottom'>Current Time Zone : <strong>{props.meta.timezone}</strong></h1>
                    
                    <Row className='mb-3 text-white text-center'>
                        <Col xs='6' sm='4'>
                            <h4><i className="fas fa-sun"></i> Sunrise {props.time.Sunrise}</h4>
                            </Col>
                        <Col xs='6' sm='4'>
                            <h4><i className="fas fa-sun"></i> Sunset {props.time.Sunset}</h4></Col>
                        <Col xs='12' sm='4'>
                            <h3><i className='fas fa-calendar-day'></i> {state.hijri.day} {state.hijri.month.en} {state.hijri.year} Hijri</h3>
                        </Col>
                    </Row>
                    <Row className='text-center'>
                        <Col xs='12' sm='4'>
                            <Card className='mb-3'>
                                <CardBody>
                                <h2>Fajar <i className='fas fa-mosque'></i></h2>
                                <h5>{props.time.Fajr}</h5>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs='12' sm='4'>
                            <Card className='mb-3'>
                                <CardBody>
                                <h2>Zuhar <i className='fas fa-mosque'></i></h2>
                                <h5>{props.time.Dhuhr}</h5>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs='12' sm='4'>
                            <Card className='mb-3'>
                                <CardBody>
                                <h2>Asar <i className='fas fa-mosque'></i></h2>
                                <h5>{props.time.Asr}</h5>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={{ size: 4, offset: 2 }} xs='12' sm='4'>
                            <Card className='mb-3'>
                                <CardBody>
                                <h2>Maghrib <i className='fas fa-mosque'></i></h2>
                                <h5>{props.time.Maghrib}</h5>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs='12' sm='4'>
                            <Card className='mb-3'>
                                <CardBody>
                                <h2>Isha <i className='fas fa-mosque'></i></h2>
                                <h5>{props.time.Isha}</h5>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </React.Fragment>
            }
        </Container>
    )
}

export default PrayersList
