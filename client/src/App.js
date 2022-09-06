import Freecourses from './Component/Freecourses/Freecourses';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/courses' element={<Freecourses />}> </Route>
          <Route path='/bonus' element={<Freecourses />}> </Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
