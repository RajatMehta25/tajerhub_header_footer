import './App.css';
import React from 'react';
import { HashRouter,Routes,Route } from "react-router-dom";
import Home from './Pages';


function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        </Routes>
        </HashRouter>
     

    </>
  );
}

export default App;
