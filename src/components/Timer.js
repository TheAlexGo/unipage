import {store} from "../store/store";
import {setAccuracy, setDataTimer, setSPM} from "../store/actions/wordActions";

const cdTimer = 0.5
const timeValue = 60*cdTimer

export const startTimer = (dispatch) => {
  const timer_id = setInterval(()=> {
    const state = store.getState().words;
    const seconds = state.seconds;
    const new_sec = seconds+cdTimer;
    const indexSymb = state.indexSymb
    const text = state.str

    const spm = calcSPM(dispatch, new_sec)

    if (indexSymb === text.length) clearInterval(timer_id)

    dispatch(setDataTimer(new_sec, spm, timer_id));
  }, cdTimer * 1000);
}

export function calcAccuracy (dispatch) {
  const current = store.getState().words.current;
  const error = store.getState().words.error;
  let accuracy = error/current !== Infinity ? (100 - (error * 100 / current)) : 0;
  accuracy = accuracy.toFixed(1);
  dispatch(setAccuracy(accuracy));
  return accuracy;
}

export function calcSPM (dispatch, new_sec) {
  const state = store.getState().words;
  const all_symbols = state.all_symbols;
  const spm = all_symbols/new_sec ? (((all_symbols/new_sec)*timeValue)/cdTimer).toFixed(): 0;
  dispatch(setSPM(spm));
  return spm;
}
