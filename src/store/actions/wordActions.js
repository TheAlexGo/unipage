import axios from "axios";
import {
  KEY_CORRECT,
  KEY_ERROR, RESTART, SAVE_RESULT,
  SET_ACCURACY, SET_COUNT,
  SET_DATA_TIMER, SET_LANG,
  SET_SPM,
  SET_TEXT,
  SET_TIMER_ID,
  SWITCH_THEME
} from "../constActions";
import {store} from "../store";

/**
 * Получение текста с API (рус, англ):
 * state - состояние
 * lang - язык
 * number - кол-во предложений
 * @returns {function(*): Promise<void>}
 */
export const getTextAction = () => {

  const state = store.getState().words;
  const lang = state.settings.lang;
  const number = state.settings.number;

  return async (dispatch) => {
    const request = new Promise((resolve) => {
      if(lang === 'rus') {
        resolve(axios.get(`https://fish-text.ru/get?type=sentence&number=${number}&format=json`));
      } else if(lang === 'eng') {
        resolve(axios.get(`https://baconipsum.com/api/?type=all-meat&sentences=${number}`));
      }
    })
    const response = await(request.then((response) => response).catch(() =>
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

/**
 * Функция обработки правильно введённого символа
 * @param {Object} str - новый массив букв
 * @param {int} all_symbols - все введённые символы
 * @returns {{payload: {str, all_symbols}, type: string}}
 */
export const keyCorrect = (str, all_symbols) =>
  ({type: KEY_CORRECT, payload: {str: str, all_symbols: all_symbols}});

/**
 * Функция обработки неправильно введённого символа
 * @param {Object} str - новый массив букв
 * @param {int} all_symbols - все введённые символы
 * @returns {{payload: {str, all_symbols}, type: string}}
 */
export const keyError = (str, all_symbols) =>
  ({type: KEY_ERROR, payload: {str: str, all_symbols: all_symbols}});

/**
 * Занесение полученого текста в состояние
 * @param {Object} str - новый массив букв
 * @returns {{payload: {str, haveText}, type: string}}
 */
export const setText = (str) =>
  ({type: SET_TEXT, payload: {str: str, haveText: true}});

/**
 * Обновление данных таймера и SPM
 * @returns {{payload: {str, haveText}, type: string}}
 * @param seconds - секунды
 * @param spm - символов в минуту
 * @param timer_id - id таймера
 */
export const setDataTimer = (seconds, spm, timer_id) =>
  ({type: SET_DATA_TIMER, payload: {seconds: seconds, spm: spm, timer_id: timer_id}})

/**
 * Занесение id таймера в состояние
 * @returns {{payload: int, type: string}}
 * @param id - id таймера
 */
export const setTimerId = (id) =>
  ({type: SET_TIMER_ID, payload: id})

/**
 * Занесение вычисленной точности в состояние
 * @returns {{payload: value, type: string}}
 * @param value - значение точности
 */
export const setAccuracy = (value) =>
  ({type: SET_ACCURACY, payload: value})

/**
 * Занесение вычисленной SPM (symbols per minute) в состояние
 * @returns {{payload: value, type: string}}
 * @param value - значение SPM
 */
export const setSPM = (value) =>
  ({type: SET_SPM, payload: value})

/**
 * Переключение темы
 * @returns {{payload: value, type: string}}
 * @param value - значение темы
 */
export const switchTheme = (value) =>
  ({type: SWITCH_THEME, payload: value})

/**
 * Занесение языка в состояние
 * @returns {{payload: value, type: string}}
 * @param value - значение языка
 */
export const setLangAction = (value) =>
  ({type: SET_LANG, payload: value})

/**
 * Занесение количества предложений в состояние
 * @returns {{payload: value, type: string}}
 * @param value - количество предложений
 */
export const setCountAction = (value) =>
  ({type: SET_COUNT, payload: value})

export const saveResultAction = (result) =>
  ({type: SAVE_RESULT, payload: result})

export const reStartAction = () =>
  ({type: RESTART})
