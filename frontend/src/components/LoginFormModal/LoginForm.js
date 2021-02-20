import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./LoginFormModal.css";

function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  return (
    <>
      <h1 className="login-form_heading">Log In</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div className="login-form-modal_input-container">
          <label className="login-form-modal_input-label">
            Email
            </label>
            <input
              className="login-form-modal_input-box"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
        </div>
        <div className="login-form-modal_input-container">
          <label className="login-form-modal_input-label">
            Password
            </label>
            <input
              className="login-form-modal_input-box"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
        </div>
        <button type="submit" className="login-form-modal_submit">Log In</button>
        <Link to="/signup" className="login-form_redirect">CREATE AN ACCOUNT</Link>
      </form>
    </>
  );
}

export default LoginForm;
