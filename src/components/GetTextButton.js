import {useSelector} from "react-redux";
import Settings from "./Settings";

export const GetTextButton = ({getText}) => {
  const haveText = useSelector(state => state.words.haveText)
  if(haveText) return null;
  return (
    <div className="d-flex flex-column m-auto mt-2">
      <h1>Давайте проверим вашу скорость печати?</h1>
      <Settings getText={getText} />
    </div>
  )
}
