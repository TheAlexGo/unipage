import React from "react";
import {Words} from "./Words";
import {useDispatch, useSelector} from "react-redux";

function Main() {
  const dispatch = useDispatch();
  const text = useSelector(state => state.words.str);

  return (
    <div className='text-block'>
      <Words words={ text }/>
    </div>
  )
}

export default Main;
