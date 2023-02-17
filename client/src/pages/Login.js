import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: ''});
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useHistory();
  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  
  const responseOk = (isLogin) => {
    return (
      <>
       <Auth loggedIn={isLogin}/>
      </>
    );
  }

  const loginClick = async () => {
    
    const { email, password } = formState;
    
    const response = await fetch('http://localhost:3001/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    
    if(response.ok) {
      setIsLogin(true);
      console.log(isLogin);
      responseOk(isLogin);
      navigate.push('/');
      
    } else {
      // clear form values
      setFormState({
        email: '',
        password: '',
      });

      alert(response.statusText);
    }
  };
      
  return (
    <>
      <div>
        <h4>Login</h4>
        <input type="text" placeholder="Email..." name='email' value={formState.email} onChange={handleChange} />
        <input type="password" placeholder="Password..." name='password' value={formState.password} onChange={handleChange}/>
        <button onClick={ () => {
          loginClick();
        }}> Login </button>

        <Link to={`/signup`} >
          <p>Sign Up</p>
        </Link>
      </div>
    </>
  );
};

export default Login;