import {SET_MODE, SET_TEMP, SET_TIME_SEL, SET_WEEK} from "./Actions";
export const arr1 = [0,1,2,3,4,5,6]
export const arr2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]


export const initialState = {
    summer: true,
    winter: false,
    colorPrimary: '#ffdd00',
    colorSecondary: '#ff9500',
    colorBoot: 'warning',
    timeSel: undefined,
    days: arr1.map(d => {
        return {
            day: d,
            temps: arr2.map(t => {
                return {
                    time:t.toString(),
                    temp:20
                }
            })
        }
    })
}

export function Reducer(state, action) {
    switch (action.type) {
        case SET_MODE :
            if(action.mode==='summer')
                return {
                    ...state,
                    summer: true,
                    winter: false,
                    colorPrimary: '#ffdd00',
                    colorSecondary: '#ff9500',
                    colorBoot: 'warning',
                }
            else return {
                ...state,
                summer: false,
                winter: true,
                colorPrimary: '#2693e6',
                colorSecondary: '#86d3ff',
                colorBoot: 'primary',
            }
        case SET_TEMP :
            return {
                ...state,
                days: state.days.map(d => {
                    if(d.day===action.day) {
                        return {
                            day: d.day,
                            temps: d.temps.map(t => {
                                if(t.time===action.time) {
                                    return {
                                        time: t.time,
                                        temp: action.temp
                                    }
                                }else return {
                                    time: t.time,
                                    temp: t.temp
                                }
                            })
                        }
                    }else return {
                        day: d.day,
                        temps: d.temps
                    }
                })
            }
        case SET_WEEK :
            let a = state.days.filter(d => d.day===action.day)[0].temps
            return {
                ...state,
                days: arr1.map(d => {
                    return {
                        day: d,
                        temps: a
                    }
                })
            }
        case SET_TIME_SEL :
            return {
                ...state,
                timeSel: action.time
            }
        default :
            return state
    }
}
