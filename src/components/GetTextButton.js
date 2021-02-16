import {useSelector} from "react-redux";

export const GetTextButton = ({getText}) => {
  const haveText = useSelector(state => state.words.haveText)
  if(haveText) return null;
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Давайте проверим вашу скорость?</h1>
      <button className="btn btn-secondary" onClick={getText} >Загрузить текст</button>
    </div>
  )
}
