import {KEY_CORRECT, KEY_ERROR, SET_ACCURACY, SET_DATA_TIMER, SET_SPM, SET_TEXT, SET_TIMER_ID} from "../constActions";


export const getTextAction = () => {

}

export const keyCorrect = (str) =>
  ({type: KEY_CORRECT, payload: str});

export const keyError = (str) =>
  ({type: KEY_ERROR, payload: str});

export const setText = (str) =>
  ({type: SET_TEXT, payload: {str: str, haveText: true}});

export const setDataTimer = (seconds, spm, timer_id) =>
  ({type: SET_DATA_TIMER, payload: {seconds: seconds, spm: spm, timer_id: timer_id}})

export const setTimerId = (id) =>
  ({type: SET_TIMER_ID, payload: id})

export const setAccuracy = (value) =>
  ({type: SET_ACCURACY, payload: value})

export const setSPM = (value) =>
  ({type: SET_SPM, payload: value})

