import React from 'react';
import logo from './logo.svg';
import Main from './pages/Main';
import Board from './pages/Board';
import Postwrite from './pages/Postwrite';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main></Main>}></Route>
            <Route path="/board" element={<Board></Board>}></Route>
            <Route path="/postwrite" element={<Postwrite></Postwrite>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
