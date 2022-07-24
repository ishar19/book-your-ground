import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {  Routes,Route } from "react-router-dom";
import Home from './pages/Home'
import Admin from './pages/Admin'
import UpdateGround from './pages/UpdateGround'

function App() {
  return (
    <div>
        <Routes>
            <Route path = "/" element={<Home/>}></Route>
            <Route path = "/admin" element={<Admin/>}></Route>
            <Route path = "/UpdateGround" element={<UpdateGround/>}></Route>
        </Routes>
    </div>
  );
}
export default App;