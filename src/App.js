import './Main.css';
import Main from "./components/Main";
import {GetTextButton} from "./components/GetTextButton";
import {getTextAction} from "./store/actions/wordActions";
import {useDispatch, useSelector} from "react-redux";
import {Results} from "./components/Results";


function App() {
  const dispatch = new useDispatch();
  const spm = useSelector(state => state.words.spm)
  const accuracy = useSelector(state => state.words.accuracy)
  const haveText = useSelector(state => state.words.haveText)

  const getText = () => {
    dispatch(getTextAction())
  }

  return (
    <div>
      <header>

      </header>
      <section>
        <GetTextButton getText={getText} />
        <Main />
        <Results accuracy={accuracy} spm={spm} haveText={haveText} />
      </section>
      <footer>

      </footer>
    </div>
  )
}



export default App;
