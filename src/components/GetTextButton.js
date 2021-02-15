import {useSelector} from "react-redux";

export const GetTextButton = ({getText}) => {
  const haveText = useSelector(state => state.words.haveText)
  if(haveText) return (
    <h1>Let's start!</h1>
  ) ;
  return (
    <button onClick={getText} >Загрузить текст</button>
  )
}
