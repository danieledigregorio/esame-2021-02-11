import {StateContext} from "./App";
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {setMode, setWeek} from "./Actions";
import Switch from "react-switch";
import {Button, ButtonGroup, Col, Container, Dropdown, Row} from "react-bootstrap";
import {FaHome} from "react-icons/fa";
import InteractiveGraph from "./InteractiveGraph";


function ControlPane() {

    const [state, dispatch] = useContext(StateContext)
    const [day, setDay] = useState(0)

    let data = state.days[day].temps.map(t => [t.time, t.temp])

    return (
        <div className="App">
            <Container className="
                justify-content-center align-self-center
                mt-xxl-1 mt-xl-1 mt-lg-1 mt-md-4 mt-sm-4 mt-4
                mb-xxl-1 mb-xl-1 mb-lg-1 mb-md-4 mb-sm-4 mb-4
            ">
                <Col className="
                    justify-content-center align-self-center
                    col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12
                ">
                    <Row className="
                        justify-content-center
                    ">
                        <div className="containerSwitch">
                            <span
                                className={state.summer ? "labelModeOn" : "labelModeOff"}
                                onClick={() => {
                                    dispatch(setMode('summer'))
                                }}
                            >
                                SUMMER
                            </span>
                            <span>
                                <Switch
                                    checked={state.winter}
                                    onChange={() => {
                                        if(state.winter) {
                                            dispatch(setMode('summer'))
                                        }else {
                                            dispatch(setMode('winter'))
                                        }
                                    }}
                                    onColor="#86d3ff"
                                    onHandleColor="#2693e6"
                                    offColor="#ffdd00"
                                    offHandleColor="#ff9500"
                                    handleDiameter={30}
                                    uncheckedIcon={false}
                                    checkedIcon={false}
                                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                    height={20}
                                    width={48}
                                    className="react-switch"
                                    id="material-switch"
                                />
                            </span>
                            <span
                                className={state.winter ? "labelModeOn" : "labelModeOff"}
                                onClick={() => {
                                    dispatch(setMode('winter'))
                                }}
                            >
                                WINTER
                            </span>
                        </div>
                    </Row>
                    <Row className="justify-content-center align-self-center">
                        <Col className="
                            justify-content-center align-self-center
                            col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12
                        ">
                            <ButtonGroup className="
                            d-none d-sm-none d-md-block d-lg-block d-xl-block
                            justify-content-center align-self-center
                            mb-xxl-3 mb-xl-3 mb-lg-3 mb-md-3 mb-sm-3 mb-3
                        ">
                                <Button
                                    active={amIActive(0)}
                                    variant={state.colorBoot}
                                    onClick={() => setDay(0)}
                                >
                                    Lunedì
                                </Button>
                                <Button
                                    active={amIActive(1)}
                                    variant={state.colorBoot}
                                    onClick={() => setDay(1)}
                                >
                                    Martedì
                                </Button>
                                <Button
                                    active={amIActive(2)}
                                    variant={state.colorBoot}
                                    onClick={() => setDay(2)}
                                >
                                    Mercoledì
                                </Button>
                                <Button
                                    active={amIActive(3)}
                                    variant={state.colorBoot}
                                    onClick={() => setDay(3)}
                                >
                                    Giovedì
                                </Button>
                                <Button
                                    active={amIActive(4)}
                                    variant={state.colorBoot}
                                    onClick={() => setDay(4)}
                                >
                                    Venerdì
                                </Button>
                                <Button
                                    active={amIActive(5)}
                                    variant={state.colorBoot}
                                    onClick={() => setDay(5)}
                                >
                                    Sabato
                                </Button>
                                <Button
                                    active={amIActive(6)}
                                    variant={state.colorBoot}
                                    onClick={() => setDay(6)}
                                >
                                    Domenica
                                </Button>
                            </ButtonGroup>
                            <Dropdown className="
                                d-block d-sm-block d-md-none d-lg-none d-xl-none
                                justify-content-center align-self-center
                                mb-xxl-3 mb-xl-3 mb-lg-3 mb-md-3 mb-sm-3 mb-3
                            ">
                                <Dropdown.Toggle variant={state.colorBoot}>
                                    Giorno
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey="1"
                                                   active={amIActive(0)}
                                                   variant={state.colorBoot}
                                                   onClick={() => setDay(0)}
                                    >
                                        Lunedì
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="1"
                                                   active={amIActive(1)}
                                                   variant={state.colorBoot}
                                                   onClick={() => setDay(1)}
                                    >
                                        Martedì
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="1"
                                                   active={amIActive(2)}
                                                   variant={state.colorBoot}
                                                   onClick={() => setDay(2)}
                                    >
                                        Mercoledì
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="1"
                                                   active={amIActive(3)}
                                                   variant={state.colorBoot}
                                                   onClick={() => setDay(3)}
                                    >
                                        Giovedì
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="1"
                                                   active={amIActive(4)}
                                                   variant={state.colorBoot}
                                                   onClick={() => setDay(4)}
                                    >
                                        Venerdì
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="1"
                                                   active={amIActive(5)}
                                                   variant={state.colorBoot}
                                                   onClick={() => setDay(5)}
                                    >
                                        Sabato
                                    </Dropdown.Item>
                                    <Dropdown.Item eventKey="1"
                                                   active={amIActive(6)}
                                                   variant={state.colorBoot}
                                                   onClick={() => setDay(6)}
                                    >
                                        Domenica
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                    <Row className="
                        justify-content-center align-self-center
                        mb-xxl-5 mb-xl-5 mb-lg-5 mb-md-5 mb-sm-5 mb-5
                    ">
                        <InteractiveGraph day={day} data={data}/>
                    </Row>
                </Col>
                <Row>
                    <Col className="
                        justify-content-center align-self-center
                        col-xxl-5 col-xl-5 col-lg-5 col-md-5 sol-sm-5 col-5
                    ">
                        <Link
                            to={{
                                pathname:'/'
                            }}
                        >
                            <FaHome
                                size={'2.5em'}
                                color={state.colorPrimary}
                                className="buttonToHome"
                            />
                        </Link>
                    </Col>
                    <Col className="
                        justify-content-center align-self-center
                        col-xxl-7 col-xl-7 col-lg-7 col-md-7 sol-sm-7 col-7
                    ">
                        <Button
                            variant={state.colorBoot}
                            onClick={() => dispatch(setWeek(Number(day)))}
                        >
                            Replica
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )

    function amIActive(d) {
        if(day===d) return true
        else return false
    }

}

export default ControlPane
