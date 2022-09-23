import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './HomePage/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Pages/Layout';
import Category from './Pages/Category';
import Pricing from './Pages/Pricing'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="Category" element={<Category />} />
          <Route path="Pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
