import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

import AuthLayout from './component/auth/layout';
import AuthLogin from './pages/auth/login';
import AuthRegister from './pages/auth/register';
import AdminDashBoard from './pages/admin-view/dashboard';
import AdminProducts from './pages/admin-view/products';
import AdminOrders from './pages/admin-view/order';
import AdminFeatures from './pages/admin-view/features';
import ShoppingListing from './pages/shopping-view/listing';
import ShoppingCheckout from './pages/shopping-view/checkout';
import ShoppingAccount from './pages/shopping-view/account';
import ShoppingLayout from './pages/shopping-view/layout';
import ShoppingHome from './pages/shopping-view/home';
import CheckAuth from './component/common/check-auth';
import AdminLayout from './pages/admin-view/layout';
import UnauthPage from './pages/unauth-page';
import NotFound from './pages/not-found'; // Add this

function App() {
  const isAuthenticated = true; 
  const user = { name: "Sangam", role: "admin" }; 

  return (
    <div className="app-container">
      <h1 className="header">Header component</h1>
      <Routes>
        <Route
          path="/"
          element={
            // <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingHome />
            // </CheckAuth>
          }
        />
        <Route
          path="/auth"
          element={
            // <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            // </CheckAuth>
          }
        >
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route
          path="/admin"
          element={
            // <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            // </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashBoard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="features" element={<AdminFeatures />} />
        </Route>
        <Route
          path="/shop"
          element={
            // <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShoppingLayout />
            // </CheckAuth>
          }
        >
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
          <Route path="account" element={<ShoppingAccount />} />
        </Route>
        <Route path="/unauth-page" element={<UnauthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;