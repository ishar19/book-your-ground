import React, { useState, useEffect } from 'react';
import {  Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Admin from './pages/Admin'
import UpdateGround from './pages/UpdateGround'
import User from './views/User'

function App() {
  return (
    <div>
        <Routes>
            <Route path = "/" element={<Home/>}></Route>
            <Route path = "/admin" element={<Admin/>}></Route>
            <Route path="/user" element={<User />}></Route>
            <Route path = "/UpdateGround" element={<UpdateGround/>}></Route>
        </Routes>
    </div>
  );
}
export default App;