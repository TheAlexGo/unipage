import './Main.scss';
import Main from "./components/Main";
import {useSelector} from "react-redux";
import Header from "./components/Header";
import React from "react";


function App() {
  const theme = useSelector(state => state.words.theme);

  return (
    <div className={theme}>
      <header>
        <Header />
      </header>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Main />
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
