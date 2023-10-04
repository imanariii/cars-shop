import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="admin" element={ <AdminPage /> } />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
