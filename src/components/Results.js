import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {startTimer} from "./Timer";
import {getTextAction, reStartAction} from "../store/actions/wordActions";
import {store} from "../store/store";

export const Results = ({ accuracy, spm }) => {
  const dispatch = useDispatch();
  const haveText = useSelector(state => state.words.haveText)
  const timerActive = useSelector(state => state.words.timerActive)

  const reStart = () => {
    const timerId = store.getState().words.timer_id;
    clearInterval(timerId);
    dispatch(reStartAction());
    dispatch(getTextAction());
  }

  useEffect(() => {
    if(timerActive) {
      startTimer(dispatch)
    }
  }, [dispatch, timerActive])

  if(!haveText) return null;

  return (
    <div className="d-flex justify-content-between flex-column">
      <div className="container p-0">
        <div className="row">
          <div className="col-6 col-md-12 col-xl-6">
            <span>Точность: </span>
            <br/>
            <span>{accuracy}%</span>
          </div>
          <div className="col-6 col-md-12 col-xl-6">
            <span>Скорость: </span>
            <br/>
            <span>{spm} зн/мин.</span>
          </div>
          <button className="btn btn-success mt-3" onClick={reStart}>Заново</button>
        </div>
      </div>
    </div>
  )
}
