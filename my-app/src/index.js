
import 'bootstrap/dist/css/bootstrap.css';import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Info from './page/info';
import TablePage from './page/table_page';
import Logged from './page/logged';
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
import AllPlayers from './page/allPlayers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalProvider>
        <Router>
            <Routes>
                <Route path="/" element={<App />} ></Route>
                <Route path="/info" element={<Info />} ></Route>
                <Route path="/table" element={<TablePage />} ></Route>
                <Route path="/register" element={<Register />} ></Route>
                <Route path="/login" element={<Login />} ></Route>
                <Route path="/home" element={<Logged />} ></Route>
                <Route path="/players" element={<AllPlayers />} ></Route>
            </Routes>
        </Router>
    </GlobalProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
