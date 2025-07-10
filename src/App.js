import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Nav from './Component/Nav';              // ✅ Navbar
import AppRoutes from './Routes/Routes';        // ✅ Your routes (use <Routes> inside it)
import Footer from './Component/Footer';        // ✅ Footer
import Dashboard from './Pages/Dashboard';

// ✅ Layout with conditional Nav & Footer
const AppLayout = () => {
  const location = useLocation();

  // ✅ Routes where Nav/Footer should be hidden
  const hideLayoutRoutes = [
    '/login',
    '/login/student',
    '/login/teacher',
    '/login/Admin',
    '/dashboard',
    '/student-dashboard',
    '/faculty-dashboard'
  ];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname) || 
                          location.pathname.includes('dashboard');

  return (
    <>
      {!shouldHideLayout && <Nav />}
      <AppRoutes />
      {!shouldHideLayout && <Footer />}
    </>
  );
};

// ✅ Main App Component
const App = () => {
  return (
    <BrowserRouter>
      <AppLayout />
     
    </BrowserRouter>
  );
};

export default App;
