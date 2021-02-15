import '../Main.css'
import React, {useCallback, useEffect} from "react";
import {Words} from "./Words";
import {useDispatch, useSelector} from "react-redux";
import {store} from "../store/store";
import {keyCorrect, keyError} from "../store/actions/wordActions";

function Main() {
  const dispatch = useDispatch();
  const text = useSelector(state => state.words.str);
  const indexSymb = useSelector(state => state.words.indexSymb);

  const onKeyPressed = useCallback((e) => {
      const currentObj = text[indexSymb];
      const nextObj = text[indexSymb + 1];

      if (e.location !== 0 || indexSymb === text.length) return;

      if (e.key === currentObj.symb) {
        text[indexSymb] = {...currentObj, class: 'passed-b'};
        if (text[indexSymb + 1])
          text[indexSymb + 1] = {...nextObj, class: 'active-b'};

        dispatch(keyCorrect(text));
      } else {
        if(currentObj.class === 'active-b')
        {
          text[indexSymb] = {...currentObj, class: 'error-b'};
          dispatch(keyError(text))
        }
      }

    }, [dispatch, indexSymb, text]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyPressed);
    if(indexSymb === text.length && text.length) {
      const error = store.getState().words.error;
      const current = store.getState().words.current;

      console.log(`Верно: ${current}\nНеверно: ${error}`);
    }
    return () => {
      document.removeEventListener("keydown", onKeyPressed);
    }
  }, [indexSymb, onKeyPressed, text]);

  return (
    <div className='text-block'
         onKeyDown={onKeyPressed}>
      <Words words={ text }/>
    </div>
  )
}

export default Main;
