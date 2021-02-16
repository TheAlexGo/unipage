import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {startTimer} from "./Timer";

export const Results = ({ accuracy, spm }) => {
  const dispatch = useDispatch();
  const haveText = useSelector(state => state.words.haveText)
  const timerActive = useSelector(state => state.words.timerActive)

  useEffect(() => {
    if(timerActive) {
      startTimer(dispatch)
    }
  }, [dispatch, timerActive])

  if(!haveText) return null;

  return (
    <div className="d-flex justify-content-between">
      <div>
        <span>Точность: </span>
        <span>{accuracy}%</span>
      </div>
      <div>
        <span>Скорость: </span>
        <span>{spm} зн/мин.</span>
      </div>
    </div>
  )
}
