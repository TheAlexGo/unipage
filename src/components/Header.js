import {useDispatch, useSelector} from "react-redux";
import {switchTheme} from "../store/actions/wordActions";
import React from "react";

function Header () {
  const theme = useSelector(state => state.words.theme)
  const dispatch = useDispatch()

  const themeSwitch = () => {
    let newValueTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(switchTheme(newValueTheme))
  }

  let classNav = 'navbar navbar-expand-lg ';
  let classButtonSwitch = 'btn p-0 ';
  if(theme === 'light') {
    classNav += 'navbar-light bg-light';
    classButtonSwitch += 'btn-light';
  } else {
    classNav += 'navbar-dark bg-dark';
    classButtonSwitch += 'btn-dark';
  }




  return (
    <header>
      <nav className={classNav}>
        <div className="container">
          <a className="navbar-brand" href="/">TypingTest</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Тренажёр</a>
              </li>
            </ul>
            <button onClick={themeSwitch} className={classButtonSwitch}>
              <div className="theme-switcher ">
                <i className="fas fa-sun" />
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
