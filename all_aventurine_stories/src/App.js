import logo from './images/logo/icon-zhumo.png';
import qutationUp from './images/logo/qutation-up.png';
import qutationDown from './images/logo/qutation-down.png';

import './App.css';

import React, { useContext, useState } from 'react';

import { gameContext } from './utils/context';
import contextInfo from './utils/contextInfo';
import MainStart from './components/main-start';
import AfterLoginStructure from './components/after-login-structure'
import AfterStart from './components/after-start';

function App() {

  const [allState, setAllState] = useState(contextInfo);
  const { isLogin, isLoginAsVeritas } = allState;

  return (
    <gameContext.Provider
      className="App" 
      value={[allState, setAllState]}>
      {!isLogin ? <MainStart /> : <AfterLoginStructure />}
      {/* <AfterStart /> */}
    </gameContext.Provider>
  );
}

export default App;
