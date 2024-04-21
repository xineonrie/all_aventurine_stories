import './App.css';

import React, { useContext, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { gameContext } from './utils/context';
import contextInfo from './utils/contextInfo';
import MainStart from './components/main-start';
import AfterLoginStructure from './components/after-login-structure'
import AfterStart from './components/after-start';
import ErrorGame from './components/error-game';
import FileReaderContent from './components/after-login-structure/fileReader'
import MainSearch from './components/after-login-structure/mainSearch';

function App() {

  const [allState, setAllState] = useState(contextInfo);
  const { isLogin, isLoginAsVeritas } = allState;

  return (
    <gameContext.Provider
      className="App" 
      value={[allState, setAllState]}>
      <BrowserRouter>
       <Routes>
          <Route path="" element={<MainStart />} />
          <Route path="/error-game" element={<ErrorGame />} />
          <Route path="/" element={<AfterLoginStructure />}>
            <Route path="home" element={<MainSearch />} />
            <Route path="file-reader" element={<FileReaderContent />} />
          </Route>
           <Route path="*" element={<Navigate to="/error-game" replace />} />
        {/* {!isLogin ? <MainStart /> : <AfterLoginStructure />} */}
       </Routes>
      {/* <AfterStart /> */}
      </BrowserRouter>
    </gameContext.Provider>
  );
}

export default App;
