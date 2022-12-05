
import 'bootstrap/dist/css/bootstrap.css';import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Info from './page/info';
import TablePage from './page/table_page';
// import { GlobalProvider } from './context/GlobalState';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes,
} from "react-router-dom";
import { GlobalProvider } from './context/GlobalState';
import Register from './page/register';
import Login from './page/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalProvider>
        <Router>
            <Routes>
                <Route path="/" element={<App />} ></Route>
            </Routes>
            <Routes>
                <Route path="/info" element={<Info />} ></Route>
            </Routes>
            <Routes>
                <Route path="/table" element={<TablePage />} ></Route>
            </Routes>
            <Routes>
                <Route path="/register" element={<Register />} ></Route>
            </Routes>
            <Routes>
                <Route path="/login" element={<Login />} ></Route>
            </Routes>
        </Router>
    </GlobalProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
