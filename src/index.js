import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListProvider from "./context/list/listProvider.js";
import SubListProvider from "./context/subList/subListProvider.js";
import UserProvider from './context/user/user.js';
import Homepage from "./pages/homepage.js";
import ListPage from './pages/listpage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* context provider starts here  */}
    <ListProvider>
      <SubListProvider>
        <UserProvider>
          {/* routes start here  */}
          <BrowserRouter>
            <Routes>
              {/* homepage route starts here  */}
              <Route path="/" element={<Homepage />} />
              {/* homepage route ends here  */}
              {/* lists route starts here  */}
              <Route path="/list" element={<ListPage />} />
              {/* lists route ends here  */}
            </Routes>
          </BrowserRouter>
          {/* routes end here  */}
        </UserProvider>
      </SubListProvider>
    </ListProvider>
    {/* context provider ends here */}
  </React.StrictMode>
);
