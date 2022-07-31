import React from 'react';
import { Navigate, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
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
        <Route path="/UpdateGround" element={<ProtectedRouteAdmin>   <UpdateGround /></ProtectedRouteAdmin> }></Route>
        <Route path="/BookGround" element={<ProtectedRoute>  <GroundBook /></ProtectedRoute>}></Route>
      </Routes>
    </div>
  );
}

const ProtectedRoute = ({children}) => {
  if (!(localStorage.getItem('email'))) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const ProtectedRouteAdmin = ({children}) => {
  if (!(sessionStorage.getItem('admin'))) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default App;