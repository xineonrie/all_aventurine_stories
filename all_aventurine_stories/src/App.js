import logo from './images/logo/icon-zhumo.png';
import qutationUp from './images/logo/qutation-up.png';
import qutationDown from './images/logo/qutation-down.png';
import './App.css';

import React from 'react';

import MainStart from './components/main-start';
import AfterStart from './components/after-start';

function App() {
  return (
    <div className="App">
      <MainStart />
      {/* <AfterStart /> */}
    </div>
  );
}

export default App;
