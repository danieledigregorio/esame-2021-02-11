import {useContext} from "react";
import {StateContext} from "./App";
import {setTemp, setTimeSel} from "./Actions";
import {nanoid} from "nanoid";
import {Col, Container, Row} from "react-bootstrap";


function InteractiveGraph({day, data}) {

    const [state, dispatch] = useContext(StateContext)

    const dati = data.filter(d => d[0] !== 'Orario')

    let i = 30, j = 0

    const zz = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84]
    const yy = [8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160, 168, 176, 184, 192]
    const xx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]

    document.addEventListener("keypress", function (event) {
        if(state.timeSel) {
            if(event.key==='+') {
                dispatch(setTemp(day, state.timeSel.toString(), dati[state.timeSel][1] + 1))
            }
            if(event.key==='-') {
                dispatch(setTemp(day, state.timeSel.toString(), dati[state.timeSel][1] - 1))
            }
        }
    })

    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="
                        justify-content-center align-self-center
                        col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12
                    ">
                        <svg width="75vw" viewBox="0 0 197 90">
                            <g stroke="white" strokeWidth={0.1} strokeOpacity={'5%'}>
                                {
                                    zz.map(z => <line key={nanoid()} x1={3.5} y1={z} x2={197} y2={z}/>)
                                }
                            </g>
                            <g fill="white" opacity={'17%'}>
                                {
                                    zz.map(z => <text key={nanoid()} x={0} y={z + 0.7} fontSize={2}>{i--}</text>)
                                }
                            </g>
                            <g>
                                {
                                    xx.map(a => {
                                        let s = a * 192 / 24
                                        return (
                                            <rect
                                                key={nanoid()}
                                                x={s - 3.5}
                                                y={2.5}
                                                rx={1.5}
                                                width={7}
                                                height={87.5}
                                                fill={state.colorPrimary}
                                                opacity="0%"
                                            />
                                        )
                                    })
                                }
                            </g>
                            <g fill="white" opacity={'60%'}>
                                {
                                    yy.map(a => <text key={nanoid()} x={a} y={88} fontSize={3.5}
                                                      textAnchor="middle">{(j++).toString().padStart(2, '0')}</text>)
                                }
                            </g>
                            <g>
                                {
                                    data.map(d => <Point key={nanoid()} time={Number(d[0])} temp={d[1]}/>)
                                }
                            </g>

                        </svg>
                    </Col>
                </Row>
            </Container>
        </div>
    )


    function Point({time, temp}) {

        let xx = (time + 1) * 192 / 24
        let yy = 124 - (temp * 120 / 30)


        let colorText
        if (state.summer) colorText = 'black'
        else colorText = 'white'

        return (
            <g
                onClick={() => {
                    dispatch(setTimeSel(time))
                }}
            >
                <defs>
                    <filter id="blurFilter" y="-5" height="40">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="0.3" y="0"/>
                    </filter>
                </defs>
                {
                    time === state.timeSel ?
                        <circle
                            cx={xx}
                            cy={yy}
                            r={3.5}
                            fill='white'
                            style={{
                                filter: "url(#blurFilter)"
                            }}
                            opacity="40%"
                        />
                        :
                        null
                }
                {
                    time === state.timeSel ?
                        <g>
                            {
                                dati[state.timeSel][1]<=29 ?
                                    <g
                                        onClick={() => {
                                            if (state.timeSel===time) {
                                                dispatch(setTemp(day, state.timeSel.toString(), dati[state.timeSel][1] + 1))
                                            }
                                        }}
                                    >
                                        <rect
                                            id="bgChangeTemp"
                                            x={xx-2}
                                            y={yy-8.25}
                                            width={4}
                                            height={3}
                                            fill="black"
                                        />
                                        <path
                                            d={`M ${xx-1.5} ${yy-6} l 1.5 -1.5 l 1.5 1.5`}
                                            stroke="grey"
                                            strokeWidth="0.9"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="changeTemp"
                                        />
                                    </g>
                                    :
                                    null
                            }
                            {
                                dati[state.timeSel][1]>=11 ?
                                    <g
                                        onClick={() => {
                                            if (state.timeSel===time) {
                                                dispatch(setTemp(day, state.timeSel.toString(), dati[state.timeSel][1] - 1))
                                            }
                                        }}
                                    >
                                        <rect
                                            id="bgChangeTemp"
                                            x={xx-2}
                                            y={yy+5.25}
                                            width={4}
                                            height={3}
                                            fill="black"
                                        />
                                        <path
                                            d={`M ${xx-1.5} ${yy+6} l 1.5 1.5 l 1.5 -1.5`}
                                            stroke="grey"
                                            strokeWidth="0.9"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="changeTemp"
                                        />
                                    </g>
                                    :
                                    null
                            }
                        </g>
                        :
                        null
                }
                <circle
                    className="strokeOutline"
                    cx={xx}
                    cy={yy}
                    r={time === state.timeSel ? 2.6 : 2.5}
                    fill={state.colorPrimary}
                    stroke={time === state.timeSel ? colorText : 'none'}
                    strokeWidth={0.4}
                />
                <text
                    x={xx}
                    y={yy + 1}
                    fontSize={3}
                    fontWeight={'bold'}
                    textAnchor={'middle'}
                    letterSpacing={-0.1}
                    fill={colorText}
                >
                    {temp}
                </text>
            </g>
        )
    }
}

export default InteractiveGraph
