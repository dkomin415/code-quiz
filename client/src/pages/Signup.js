import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  
const [formState, setFormState] = useState('');

  return (
      <section>
      <div>
        <h4>Signup</h4>
        <input type="text" placeholder="Username..." />
        <input type="password" placeholder="Password..." />
        <button> Signup </button>
      </div>

      <Link to={`/login`} >
        <p>Login</p>
      </Link>

    </section>  
  );
};

export default Signup;
