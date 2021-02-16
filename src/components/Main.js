import React, {useEffect, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Words} from "./Words";
import {store} from "../store/store";
import {keyCorrect, keyError} from "../store/actions/wordActions";
import {calcAccuracy} from "./Timer";


function Main() {
  const dispatch = useDispatch();
  const text = useSelector(state => state.words.str);
  const indexSymb = useSelector(state => state.words.indexSymb);
  const all_symbols = useSelector(state => state.words.all_symbols);
  const haveText = useSelector(state => state.words.haveText);

  const onKeyPressed = useCallback((e) => {
      const currentObj = text[indexSymb];
      const nextObj = text[indexSymb + 1];

      if (e.location !== 0 || indexSymb === text.length) return;

      if (e.key === currentObj.symb) {
        text[indexSymb] = {...currentObj, class: 'passed-b'};
        if (text[indexSymb + 1])
          text[indexSymb + 1] = {...nextObj, class: 'active-b'};
        dispatch(keyCorrect(text, all_symbols+1))
      } else {
        if(currentObj.class === 'active-b')
        {
          text[indexSymb] = {...currentObj, class: 'error-b'};
          dispatch(keyError(text, all_symbols+1))
        }
      }
      calcAccuracy(dispatch)
    }, [all_symbols, dispatch, indexSymb, text]
  )

  useEffect(() => {
    document.addEventListener("keydown", onKeyPressed);
    if(indexSymb === text.length && text.length) {
      const error = store.getState().words.error;
      const current = store.getState().words.current;

      console.log(`Верно: ${current}\nНеверно: ${error}`);
    }
    return () => {
      document.removeEventListener("keydown", onKeyPressed)
    }
  }, [indexSymb, onKeyPressed, text])

  let classBlock = 'text-block ';
  if(haveText) {
    classBlock += 'd-block';
  } else {
    classBlock += 'd-none';
  }

  return (
    <div className={classBlock}
         onKeyDown={onKeyPressed}>
      <Words words={ text }/>
    </div>
  )
}

export default Main;
