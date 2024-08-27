import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Count from './Count'
import HelloHooks from './HelloHooks';
import Quiz1 from './Quiz1';
import Quiz2 from './Quiz2';
import Quiz3 from './Quiz3';
import UpdateObject from './UpdateObject';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/helloHooks' element={<HelloHooks/>} />
        <Route path='/Count' element={<Count/>} />
        <Route path='/UpdateObject' element={<UpdateObject/>} />
        <Route path='/Quiz1' element={<Quiz1/>} />
        <Route path='/Quiz2' element={<Quiz2/>} />
        <Route path='/Quiz3' element={<Quiz3/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
