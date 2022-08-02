import './App.css';
import React from 'react';

import NavbarComp from './Components/NavbarComp';
import UserListComp from './Components/UserListComp';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import UserDetailsComp from './Components/UserDetailsComp';

function App() {
  return (
    <>
    <Router>
    <NavbarComp/>

      <Routes>
        <Route path="/" element={<UserListComp/>} />
        <Route path="/users" element={<UserListComp/>} />
        <Route path="/users/:id" element={<UserDetailsComp/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
