import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Nav from './components/navbar/Nav.jsx';
import Main from './page/Main.jsx';

const App = () => {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
};
ReactDOM.render(<App />, document.getElementById('app'));