import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenusProvider from "./context/menusContextProvider.js";
import MenuProvider from "./context/menuContextProvider.js";
import UserProvider from './context/user';
import Homepage from "./pages/homepage";
import RegisterPage from './pages/registerPage';
import LoginPage from './pages/loginPage';
import Lists from './pages/listsPage';

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
        <Route path="/" element={<Homepage />} />
        {/* homepage route ends here  */}
        {/* menus route starts here  */}
        <Route path="/lists" element={<Lists />} />
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