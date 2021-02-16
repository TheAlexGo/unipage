import './Main.scss';
import Main from "./components/Main";
import {GetTextButton} from "./components/GetTextButton";
import {getTextAction} from "./store/actions/wordActions";
import {useDispatch, useSelector} from "react-redux";
import {Results} from "./components/Results";
import Header from "./components/Header";
import React from "react";


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
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">

              <GetTextButton getText={getText} />
              <div className="container p-0">
                <div className="row">
                  <div className="col-md-9 col-12 order-1 order-md-0 mt-3 mt-md-0">
                    <Main />
                  </div>
                  <div className="col-md-3 col-12 order-0 order-md-1">
                    <div className="container p-0">
                      <div className="row d-flex flex-column">
                        <div className="col-12">
                          <Results accuracy={accuracy} spm={spm} haveText={haveText} />
                        </div>
                      </div>
                    </div>
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
