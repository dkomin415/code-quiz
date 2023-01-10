import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Login = (props) => {
  const [formState, setFormState] = useState('');

  useEffect(() => {
    const fetchLogin = async () => {

    }
  }, [formState]);


  return (
    <section>
      <div>
        <h4>Login</h4>
        <input type="text" placeholder="Username..." />
        <input type="password" placeholder="Password..." />
        <button> Login </button>

        <Link to={`/signup`} >
          <p>Sign Up</p>
        </Link>
      </div>
    </section>
  );
};

export default Login;