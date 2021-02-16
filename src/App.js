import './Main.scss';
import Main from "./components/Main";
import {GetTextButton} from "./components/GetTextButton";
import {getTextAction} from "./store/actions/wordActions";
import {useDispatch, useSelector} from "react-redux";
import {Results} from "./components/Results";
import Header from "./components/Header";


function App() {
  const dispatch = new useDispatch();
  const spm = useSelector(state => state.words.spm);
  const accuracy = useSelector(state => state.words.accuracy);
  const haveText = useSelector(state => state.words.haveText);
  const theme = useSelector(state => state.words.theme);

  const getText = () => {
    dispatch(getTextAction());
  }

  return (
    <div className={theme}>
      <header>
        <Header />
      </header>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <GetTextButton getText={getText} />
              <div className="container p-0">
                <div className="row">
                  <div className="col-12">
                    <Results accuracy={accuracy} spm={spm} haveText={haveText} />
                  </div>
                  <div className="col-12">
                    <Main />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>

      </footer>
    </div>
  )
}



export default App;
