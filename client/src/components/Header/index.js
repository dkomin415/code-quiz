import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ loggedIn }) => {
  console.log(loggedIn);

  return (
    <header style={{ background: 'teal', height: '20%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/">
          <h1>Quizes.com</h1>
        </Link>
      {loggedIn ? (
        <>
          <h3>logout</h3>
        </>
      ) : (
        <>
          <Link to="/login"><h3>Login</h3></Link>
          <Link to="/signup"><h3>Signup</h3></Link>
        </>
      )}
      </div>
      <hr style={{ height: '3px', background: 'black' }}></hr>

    </header>
  );
};

export default Header;