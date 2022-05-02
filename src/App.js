
import React, { useState} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './StateProvider';


function App() {
  const [{ user }, dispatch]= useStateValue();

  const uid =
  localStorage.getItem("uid") !== undefined
    ? localStorage.getItem("uid")
    : null;

  return (
    <div className="app">
      {!user && !uid ? (
        <Login />
      ) : (
        <div className='app_body'>
        <Router>
          <Sidebar />
          <Routes>
          <Route  path='/rooms/:roomId' element={<Chat/>} />
          <Route  path='/' element={<Chat/>} />
            
             
          </Routes>
        </Router >
      </div>
      )}
    </div>
  );
}

export default App;
