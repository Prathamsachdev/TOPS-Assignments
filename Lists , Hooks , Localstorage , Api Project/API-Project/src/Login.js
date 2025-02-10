import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  let nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    nav('/product');
  };

  return (
    <div className="container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={login}>Login</button>
      </form>
    </div>
  );
}
