import React,{ useState } from 'react';
import { Container, Row, Col,Card, CardImg, CardText, CardBody,
        CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Spin } from "react-loading-io";

const PrayersList = (props) => {

    var initialState = {

    }
    console.log(props);
    const [state, setstate] = useState(initialState);

    return (
        <Container>
            {
                props.meta === '' ? <div className='spinner text-center'><Spin size={110} color={"white"} /></div>
                :
                <React.Fragment>
                    <h1 className='text-center text-white pt-5 mb-5'>Current Time Zone : <u>{props.meta.timezone}</u></h1>
                    <h2><i className="fas fa-sun"></i>{props.time.Sunrise}</h2>
                    <h2><i className="fas fa-sun"></i>{props.time.Sunset}</h2>
                    <Row>
                        <Col xs='12' sm='4'>
                            <Card>
                                <CardBody>
                                <h2>Fajar</h2>
                                <h5>{props.time.Fajr}</h5>
                                <Button>{props.date.hijri}</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs='12' sm='4'>
                            <Card>
                                <CardBody>
                                <h2>Zuhar</h2>
                                <h5>{props.time.Dhuhr}</h5>
                                <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs='12' sm='4'>
                            <Card>
                                <CardBody>
                                <h2>Asar</h2>
                                <h5>{props.time.Asr}</h5>
                                <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={{ size: 4, offset: 2 }} xs='12' sm='4'>
                            <Card>
                                <CardBody>
                                <h2>Maghrib</h2>
                                <h5>{props.time.Maghrib}</h5>
                                <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs='12' sm='4'>
                            <Card>
                                <CardBody>
                                <h2>Isha</h2>
                                <h5>{props.time.Isha}</h5>
                                <Button>Button</Button>
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
