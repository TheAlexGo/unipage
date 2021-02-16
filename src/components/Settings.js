import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {SET_COUNT_TEXT, SET_LANG_TEXT} from "../constants";
import {setCountAction, setLangAction} from "../store/actions/wordActions";

const Settings = ({getText}) => {
  const dispatch = useDispatch();
  const langs = useSelector(state => state.words.langs);

  const [disableButton, setDisableButton] = useState(true);
  const [disableInput, setDisableInput] = useState(true);

  const langValues = langs.map(lang =>
    <option value={lang.value} key={lang.value} disabled={lang.value === 'def'} >
      {lang.name}
    </option>)

  const setLang = (event) => {
    dispatch(setLangAction(event.target.value));
    setDisableInput(false);
  }

  const setCount = (event) => {
    dispatch(setCountAction(event.target.value));
    setDisableButton(false);
  }

  return(
    <div>
      <h3 className="mt-3">{SET_LANG_TEXT}</h3>
      <select id="lang" name="lang" className="form-select" onChange={setLang} defaultValue="def">
        {langValues}
      </select>
      <h3 className="mt-3">{SET_COUNT_TEXT}</h3>
      <input id="count" name="count" type="text" className="form-control" onChange={setCount} disabled={disableInput}/>
      <button id="start" className="btn btn-secondary w-100 mt-3" onClick={getText} disabled={disableButton} >Загрузить текст</button>
    </div>
  )
}

export default Settings
