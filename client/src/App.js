import Freecourses from './Component/Freecourses/Freecourses';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Signin from './Component/Sign/SignIn';
import Signup from './Component/Sign/SignUp';
import Post from './Component/Post/Post';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/courses' element={<Freecourses />}> </Route>
          <Route path='/bonus' element={<Freecourses />}> </Route>
          <Route path='/login' element={<Signin />}> </Route>
          <Route path='/register' element={<Signup />}> </Route>
          <Route path='/post' element={<Post />}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
