// import './App.css'
// import AuthLayout from './component/auth/layout'

// function App() {

//   return (
//     <div className='flex flex-col ovreflow-hidden bg-white'> 
// <h1> Header component</h1>
//     <Routes>
//       <Route path="/auth" element={<AuthLayout/>}>

//       </Route>
//     </Routes>
//     </div>
//   )
// }

// export default App
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import React from "react"
// import { Routes, Route } from 'react-router-dom';
import AuthLayout from './component/auth/layout';
import AuthLogin from './pages/auth/login';
import AdminDashBoard from './pages/admin-view/dashboard';
import AdminProducts from './pages/admin-view/products';
import AdminOrders from './pages/admin-view/order';
import AdminFeatures from './pages/admin-view/features';
import ShoppingListing from './pages/shopping-view/listing';
import ShoppingCheckout from './pages/shopping-view/checkout';
import ShoppingAccount from './pages/shopping-view/account';
import CheckAuth from './component/common/check-auth';
import AdminLayout from './pages/admin-view/layout';

function App() {
  const isAuthenticated = false;
  const user = {
    name: "Sangam",
    role: "admin",
  };
  return (
    <>
    <div className="app-container"> 
      <h1 className="header">Header component</h1>
      <Router>
        <Routes>
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout/>
          </CheckAuth>
        }>
         <Route path="login" element={<AuthLogin/>}/>
         <Route path="register" element={<AuthRegister/>}/>
         </Route>
         <Route path="/login" element={<AuthLogin />}/>
        </Routes>
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }>
        <Route path="/dashboard" element={<AdminDashBoard/>}/>
        <Route path="/products" element={<AdminProducts/>}/>
        <Route path="/orders" element={<AdminOrders/>}/>
        <Route path="/features" element={<AdminFeatures/>}/>
        </Route>
        <Route path="/shop" element={
          <CheckAuth>
            <ShoppingLayout/>
          </CheckAuth>
        }/>
        <Route path="/ home" element={<ShoppingHome/>}>
        <Route path="/listing" element={<ShoppingListing/>}/>
        <Route path="/checkout" element={<ShoppingCheckout/>}/>
        <Route path="/account" element={<ShoppingAccount/>}/>
        
        </Route>
        
        <Route path="/unauth-page" element={<UnauthPage/>}/>
      </Router>
    </div>
    </>
  );
}

export default App;
