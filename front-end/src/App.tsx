import Login from './pages/Login';
import Signature from './pages/signature';
import Main from './pages/Main';
import Board from './pages/Board';
import Post from './pages/Post';
import Postedit from './pages/Postedit';
import Postwrite from './pages/Postwrite';
import Contracts from './pages/Contracts';
import Contract_object from './pages/Contract_object';
import Contractwrite from './pages/Contractwrite';
import Contract_edit from './pages/Contractsedit';
import Vertification from './pages/Verification';
import Chat from './pages/Chat';
import Mypage from './pages/Mypage';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import appStore from './store/appStore';

function App() {
  console.log("안녕하세요!", appStore.value)

  // if (appStore.value == 1) {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main></Main>}></Route>
            {/* <Route path="/login" element={<Login></Login>}></Route> */}
            {/* <Route path="/signature" element={<Signature></Signature>}></Route> */}
            <Route path="/board" element={<Board></Board>}></Route>
            <Route path="/board/*" element={<Post></Post>}></Route>
            <Route path="/postedit/*" element={<Postedit></Postedit>}></Route>
            <Route path="/postwrite" element={<Postwrite></Postwrite>}></Route>
            <Route path="/contracts" element={<Contracts></Contracts>}></Route>
            <Route path="/contracts/*" element={<Contract_object></Contract_object>}></Route>
            <Route path="/contractwrite" element={<Contractwrite></Contractwrite>}></Route>
            <Route path="/contract_edit" element={<Contract_edit></Contract_edit>}></Route>
            <Route path="/vertification" element={<Vertification></Vertification>}></Route>
            <Route path="/chat" element={<Chat></Chat>}></Route>
            <Route path="/mypage" element={<Mypage></Mypage>}></Route>
          </Routes>
        </BrowserRouter>
        {appStore.value === 2 && <Login></Login>}
        {appStore.value === 3 && <Signature></Signature>}
    </div>
    );
  // } else {
  //   return (
  //     <div className="App">
  //       <Login></Login>
  //     </div>
  //   );
  // }
}

export default observer(App);
