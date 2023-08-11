import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Vechicles from './Components/Vechicles';
import People from './Components/People';
import Spaceships from './Components/Spaceships';
import Planets from './Components/Planets';
import Home from './Components/Home';

function App() {
  return (
    <>
      <Router>
      <Navbar title="Start Wars"/>
      <div className='container mx-3'>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/vechicles" element={<Vechicles/>}/>
          <Route exact path="/people" element={<People/>}/>
          <Route exact path="/spaceships" element={<Spaceships/>}/>
          <Route exact path="/planets" element={<Planets/>}/>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
