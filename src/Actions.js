export const SET_MODE = 'setMode'
export const SET_TEMP = 'setTemp'
export const SET_WEEK = 'setWeek'
export const SET_TIME_SEL = 'setTimeSel'

export function setMode(mode) {
    return {type: SET_MODE, mode}
}
//                      num  str   num
export function setTemp(day, time, temp) {
    return {type: SET_TEMP, day, time, temp}
}
export function setWeek(day) {
    return {type: SET_WEEK, day}
}
export function setTimeSel(time) {
    return {type: SET_TIME_SEL, time}
}
