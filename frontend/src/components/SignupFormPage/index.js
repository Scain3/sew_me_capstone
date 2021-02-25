import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ firstName, lastName, email, username, password }))
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className="top-signup-form-div">
    <h1 className="signup-form_heading">Sign Up</h1>
    <form className="signup-form" onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <div className="signup-form_input-container">
        <label className="signup-form_input-label">
            First Name
        </label>
            <input
                className="signup-form_input-box"
                name="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
            />
      </div>
      <div className="signup-form_input-container">
        <label className="signup-form_input-label">
            Last Name
        </label>
            <input
              className="signup-form_input-box"
              name="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
            />
      </div>
      <div className="signup-form_input-container">
        <label className="signup-form_input-label">
          Email
        </label>
          <input
            className="signup-form_input-box"
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
      </div>
      <div className="signup-form_input-container">
        <label className="signup-form_input-label">
          Username
        </label>
          <input
            className="signup-form_input-box"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
      </div>
      <div className="signup-form_input-container">
        <label className="signup-form_input-label">
          Password
        </label>
          <input
            className="signup-form_input-box"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
      </div>
      <div className="signup-form_input-container">
        <label className="signup-form_input-label">
          Confirm Password
        </label>
          <input
            className="signup-form_input-box"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
      </div>
      <button className="signup-button" type="submit">Sign Up</button>
    </form>
  </div>
  );
}

export default SignupFormPage;
