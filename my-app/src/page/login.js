import React from "react";
import Navbar from "../componets/navbar";
import { useState } from "react";
import AuthService from "../services/auth.service"
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from "../context/GlobalState.js";
import jwtDecode from "jwt-decode";


const Login = () => {
  let navigate = useNavigate();
  
  const [ state, dispatch ] = useGlobalState();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const usernameInput = (e) => {
  setUsername(e.target.value);
  };
  const passwordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    
      AuthService
        .login(username, password)
        .then(async (resp) => {
          let data = jwtDecode(resp.access)
          await dispatch({
            currentUserToken: resp.access,
            currentUser: data
          })
          navigate('/info')
        });
    }
      return (
        <div>
      <Navbar />
      <div className="row d-flex justify-content-center align-items-center">
        <h1 className='text-center pb-3'> Login Here </h1>
        <div className="col-12 pb-4 d-flex justify-content-center">
          <input id='usernameInput' onChange={usernameInput} type="text" placeholder="Username" />
        </div>
        <div className="col-12 pb-4 d-flex justify-content-center">
          <input id='passwordInput'onChange={passwordInput} type="password" placeholder="Password" />
        </div>
        <div className="col-12 d-flex justify-content-center">
          <button onClick={handleLogin} type="button" className="btn btn-primary">
            Click to Login
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login