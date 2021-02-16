import React, {useEffect, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Words} from "./Words";
import {store} from "../store/store";
import {getTextAction, keyCorrect, keyError} from "../store/actions/wordActions";
import {calcAccuracy} from "./Timer";
import {Results} from "./Results";
import {GetTextButton} from "./GetTextButton";


function Main() {
  const dispatch = useDispatch();
  const text = useSelector(state => state.words.str);
  const indexSymb = useSelector(state => state.words.indexSymb);
  const all_symbols = useSelector(state => state.words.all_symbols);
  const haveText = useSelector(state => state.words.haveText);
  const spm = useSelector(state => state.words.spm);
  const accuracy = useSelector(state => state.words.accuracy);

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
  }, [all_symbols, dispatch, indexSymb, text])

  const getText = () => {
    dispatch(getTextAction());
  }

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

  if(haveText)
    return (
      <div className="container p-0">
        <div className="row">
          <div className="col-md-9 col-12 order-1 order-md-0 mt-3 mt-md-0">
            <div className="text-block"
                 onKeyDown={onKeyPressed}>
              <Words words={ text }/>
            </div>
          </div>
          <div className="col-md-3 col-12 order-0 order-md-1">
            <div className="text-block"
                 onKeyDown={onKeyPressed}>
              <Results accuracy={accuracy} spm={spm} />
            </div>
          </div>
        </div>
      </div>
    )
  else return (
    <GetTextButton getText={getText} />
  );
}

export default Main;
