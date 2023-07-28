import Login from './pages/Login';
import Main from './pages/Main';
import Board from './pages/Board';
import Postwrite from './pages/Postwrite';
import Contracts from './pages/Contracts';
import Vertification from './pages/Verification';
import Chat from './pages/Chat';
import Mypage from './pages/Mypage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main></Main>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/board" element={<Board></Board>}></Route>
            <Route path="/postwrite" element={<Postwrite></Postwrite>}></Route>
            <Route path="/contracts" element={<Contracts></Contracts>}></Route>
            <Route path="/vertification" element={<Vertification></Vertification>}></Route>
            <Route path="/chat" element={<Chat></Chat>}></Route>
            <Route path="/mypage" element={<Mypage></Mypage>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
