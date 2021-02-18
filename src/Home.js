import {StateContext} from "./App";
import {useContext, useState} from "react";
import moment from 'moment'
import {Link} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";
import {FaCog} from "react-icons/fa";

export const a1 = [1,2,3,4,5,6,0]

function Home() {

    moment.updateLocale('it', {months: [
            'gennaio',
            'febbraio',
            'marzo',
            'aprile',
            'maggio',
            'giugno',
            'luglio',
            'agosto',
            'settembre',
            'ottobre',
            'novembre',
            'dicembre'
        ]})

    const [state] = useContext(StateContext)
    const [time, setTime] = useState(moment().format('H:mm:ss'))
    const [date, setDate] = useState(moment().locale('it').format('DD MMMM YYYY'))

    setInterval(function () {
        setTime(moment().locale('it').format('H:mm:ss'))
        setDate(moment().locale('it').format('DD MMMM YYYY'))
    })

    return (
        <div className="App">
            <Container className="
                mt-xxl-1 mt-xl-1 mt-lg-1 mt-md-4 mt-sm-4 mt-4
                mb-xxl-1 mb-xl-1 mb-lg-1 mb-md-4 mb-sm-4 mb-4
            ">
                <Row>
                    <Col className="
                        align-self-center
                        col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12
                        mb-xxl-0 mb-xl-0 mb-lg-0 mb-md-5 mb-sm-5 mb-5
                    ">
                        <div>
                            <h3 id="date">{date}</h3>
                            <h2 id="time">{time}</h2>
                        </div>
                    </Col>
                    <Col className="
                        align-self-center
                        col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12
                    ">
                        <div className="
                            mb-xxl-5 mb-xl-5 mb-lg-5 mb-md-5 mb-sm-5 mb-5
                        ">
                            <h4 className="labelHome">
                                MODALIT&Agrave; ATTIVA
                            </h4>
                            {state.summer ?
                                <h2 className="titleModeSummerHome">
                                    SUMMER
                                </h2>
                                :
                                <h2 className="titleModeWinterHome">
                                    WINTER
                                </h2>}
                        </div>
                        <div>
                            <h3 className="labelHome">
                                TEMPERATURA ATTUALE
                            </h3>
                            <h1 className="titleTempHome">
                                {state.days.filter(d => a1[d.day]===Number(moment().format('d')))[0].temps[Number(moment().format('H'))].temp} °C
                            </h1>
                        </div>
                    </Col>
                </Row>
                <Row className="
                    align-self-center justify-content-center
                    mt-xxl-5 mt-xl-5 mt-lg-5 mt-md-5 mt-sm-5 mt-5
                ">
                    <Link
                        to={{
                            pathname:'/settings'
                        }}
                        className="iconSettings"
                    >
                        <FaCog
                            size={'2.5em'}
                        />
                    </Link>
                </Row>
            </Container>
        </div>
    )
}


export default Home
