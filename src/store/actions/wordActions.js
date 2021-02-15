import axios from "axios";
import {KEY_CORRECT, KEY_ERROR, SET_ACCURACY, SET_DATA_TIMER, SET_SPM, SET_TEXT, SET_TIMER_ID} from "../constActions";


export const getTextAction = () => {
  return async (dispatch) => {
    let test = new Promise((resolve) => {
      if(0) {
        resolve(axios.get('https://baconipsum.com/api/?type=all-meat&sentences=1'))
      } else {
        resolve(axios.get('https://fish-text.ru/get?type=sentence&number=1'))
      }
    })
    const response = await(test.then((response) => response).catch(() =>
      ({data: ['Жили у бабуси два весёлых гуся: один серый, другой белый, два весёлых гуся!']})
    ))

    let responseText = ""
    if(0) {
      responseText = response.data[0]
    } else {
      responseText = response.data.text
    }

    let text = [...responseText].map((s, index) => ({symb: s, class: 'normal-b', id: index}));
    text[0] = {...text[0], class: 'active-b'};
    dispatch(setText(text));
  }
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
