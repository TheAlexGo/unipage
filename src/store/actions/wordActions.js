import axios from "axios";
import {
  KEY_CORRECT,
  KEY_ERROR,
  SET_ACCURACY, SET_COUNT,
  SET_DATA_TIMER, SET_LANG,
  SET_SPM,
  SET_TEXT,
  SET_TIMER_ID, SET_TYPE,
  SWITCH_THEME
} from "../constActions";
import {store} from "../store";


export const getTextAction = () => {

  const state = store.getState().words;
  const lang = state.settings.lang;
  const number = state.settings.number;

  return async (dispatch) => {
    let test = new Promise((resolve) => {
      if(lang === 'rus') {
        resolve(axios.get(`https://fish-text.ru/get?type=sentence&number=${number}&format=json`));
      } else if(lang === 'eng') {
        resolve(axios.get(`https://baconipsum.com/api/?type=all-meat&sentences=${number}`));
      }
    })
    const response = await(test.then((response) => response).catch(() =>
      ({data: ['Жили у бабуси два весёлых гуся: один серый, другой белый, два весёлых гуся!']})
    ))

    let responseText
    if(lang === 'rus') {
      responseText = response.data.text
    } else if(lang === 'eng') {
      responseText = response.data[0]
    }

    let text = [...responseText].map((s, index) => ({symb: s, class: 'normal-b', id: index}));
    text[0] = {...text[0], class: 'active-b'};
    dispatch(setText(text));
  }
}

export const keyCorrect = (str, all_symbols) =>
  ({type: KEY_CORRECT, payload: {str: str, all_symbols: all_symbols}});

export const keyError = (str, all_symbols) =>
  ({type: KEY_ERROR, payload: {str: str, all_symbols: all_symbols}});

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

export const switchTheme = (value) =>
  ({type: SWITCH_THEME, payload: value})

export const setLangAction = (value) =>
  ({type: SET_LANG, payload: value})

export const setTypeAction = (value) =>
  ({type: SET_TYPE, payload: value})

export const setCountAction = (value) =>
  ({type: SET_COUNT, payload: value})

