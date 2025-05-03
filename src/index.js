import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom';
import './index.css';
import App from './App';
import CssTypes from './cssTypes.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
    <CssTypes/>
    {/* <Router>
      <Routes> 
        <Route path='/css'>
          <CssTypes/>
        </Route>
      </Routes>
    </Router> */}
  </React.StrictMode>
);
