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
    <div>
      <div>Точность: {accuracy}%</div>
      <div>Скорость печати: {spm} зн/мин.</div>
    </div>
  )
}
