import React from'react';
import {Routes,Route,Link} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import './App.css';
function App(){

  return(
    <div className="App">
      <h1>This is Signup and Dashboard Assignment.</h1>
      <Link to="/signup">Signup Page</Link><br></br>
      <Link to="/dashboard">Dashboard Page</Link><br></br>
      <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </div>
  )
}

export default App;