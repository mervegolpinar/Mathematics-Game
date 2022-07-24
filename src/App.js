import { Route, Routes } from 'react-router-dom';
import React from 'react'
import './App.css';
import Final from './component/Final';
import Game from './component/Game';
import Start from './component/Start';
import DataContextProvider from "./context/DataContext";


function App() {

  return (
    <>
    <DataContextProvider>
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/game' element={<Game />} />
          <Route path='/final' element={<Final />} />

        </Routes>
    </DataContextProvider>
    </>
  );
}

export default App;
