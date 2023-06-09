import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Nav from './components/navbar/Nav.jsx';
import Main from './page/Main.jsx';
import Board from './page/Board.jsx';
import Schedule from './page/Schedule.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/board" element={<Board />} />
        <Route path="/Schedule" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  )
};
ReactDOM.render(<App />, document.getElementById('app'));