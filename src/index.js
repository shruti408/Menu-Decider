import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListsProvider from "./context/lists/listsContextProvider.js";
import ListProvider from "./context/list/listContextProvider.js";
import UserProvider from './context/user/user.js';
import Homepage from "./pages/homepage.js";
import Lists from './pages/listsPage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* routes start here  */}
    <BrowserRouter>
    <ListsProvider>
    <ListProvider>
    <UserProvider>
      {/* context provider starts here  */}
      <Routes>
        {/* homepage route starts here  */}
        <Route path="/" element={<Homepage />} />
        {/* homepage route ends here  */}
        {/* menus route starts here  */}
        <Route path="/lists" element={<Lists />} />
        {/* menus route ends here  */}
      </Routes>
      
      </UserProvider>
      </ListProvider>
      </ListsProvider>
      {/* context provider ends here */}
    </BrowserRouter>
    {/* routes end here  */}
  </React.StrictMode>
);
