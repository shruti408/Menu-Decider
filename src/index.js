import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenusProvider from "./components/context/menusContextProvider.js";
import MenuProvider from "./components/context/menuContextProvider.js";
import Menus from './components/menus/menus.js';
import UserProvider from './components/context/user';
import App from "./App";
import RegisterPage from './components/registerPage';
import LoginPage from './components/loginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* routes start here  */}
    <BrowserRouter>
    <MenusProvider>
    <MenuProvider>
    <UserProvider>
      {/* context provider starts here  */}
      <Routes>
        {/* homepage route starts here  */}
        <Route path="/" element={<App />} />
        {/* homepage route ends here  */}
        {/* menus route starts here  */}
        <Route path="/menus" element={<Menus />} />
        {/* menus route ends here  */}
        <Route path="/register" element={<RegisterPage />} />
    </Routes>
      
      </UserProvider>
      </MenuProvider>
      </MenusProvider>
      {/* context provider ends here */}
    </BrowserRouter>
    {/* routes end here  */}
  </React.StrictMode>
);

// routes banate h 