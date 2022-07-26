import React, { useState, useEffect } from 'react';
import { Navigate, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Admin from './pages/Admin'
import AdminLogin from './auth/adminLogin'
import UpdateGround from './pages/UpdateGround'
import User from './views/User'
import GroundBook from './views/GroundBook'
import UserProfile from './views/UserProfile'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>


        <Route path="/admin" element={<AdminLogin />}></Route>



        <Route path="/userprofile" element={<ProtectedRoute>
          <UserProfile />
        </ProtectedRoute>}></Route>
        <Route path="/user" element={<ProtectedRoute> <User /></ProtectedRoute>}></Route>
        <Route path="/UpdateGround" element={<ProtectedRoute>   <UpdateGround /></ProtectedRoute> }></Route>
        <Route path="/BookGround" element={<ProtectedRoute>  <GroundBook /></ProtectedRoute>}></Route>
      </Routes>
    </div>
  );
}

const ProtectedRoute = () => {
  if (!(sessionStorage.getItem('email'))) {
    return <Navigate to="/" replace />;
  }
};
export default App;