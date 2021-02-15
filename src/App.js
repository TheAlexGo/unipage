import Main from "./components/Main";
import {GetTextButton} from "./components/GetTextButton";
import {getTextAction} from "./store/actions/wordActions";
import {useDispatch} from "react-redux";


function App() {
  const dispatch = new useDispatch();

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
      </section>
      <footer>

      </footer>
    </div>
  )
}



export default App;
