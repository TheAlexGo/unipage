import './Main.scss';
import Main from "./components/Main";
import {useSelector} from "react-redux";
import Header from "./components/Header";
import React from "react";
import Footer from "./components/Footer";
import Modal from "./components/Modal";


function App() {
  const theme = useSelector(state => state.words.theme);

  return (
    <div className={theme}>
      <Header />
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Main />
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Modal />
    </div>
  )
}



export default App;
