import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/home';
import DetailsPage from './pages/countryDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/Harri-Part2-React'>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/details/:countryCode" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
