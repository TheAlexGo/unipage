import {KEY_CORRECT, KEY_ERROR, SET_TEXT, SET_TIMER_ID, SET_DATA_TIMER, SET_ACCURACY, SET_SPM} from "../constActions";

const defaultState = {
  str: "",
  indexSymb: 0,
  current: 0,
  error: 0,
  all_symbols: 0,
  seconds: 0,
  spm: 0,
  accuracy: 0,
  timer_id: 0,
  timerActive: false,
  haveText: false,
}

export default function wordReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        str: action.payload.str,
        haveText: action.payload.haveText
      }
    case KEY_CORRECT:
      return {
        ...state,
        str: action.payload.str,
        indexSymb: state.indexSymb+1,
        current: state.current+1,
        all_symbols: action.payload.all_symbols,
        timerActive: true
      }
    case KEY_ERROR:
      return {
        ...state,
        str: action.payload.str,
        error: state.error+1,
        all_symbols: action.payload.all_symbols,
        timerActive: true
      }
    case SET_DATA_TIMER:
      return {
        ...state,
        spm: action.payload.spm,
        seconds: action.payload.seconds,
        timer_id: action.payload.timer_id
      }
    case SET_TIMER_ID:
      return {
        ...state,
        timer_id: action.payload
      }
    case SET_ACCURACY:
      return {
        ...state,
        accuracy: action.payload
      }
    case SET_SPM:
      return {
        ...state,
        spm: action.payload
      }
    default:
      return state;
  }
}


