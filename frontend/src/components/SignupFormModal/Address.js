import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function MeasurementPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [streetAddress1, setStreetAddress1] = useState("");
  const [streetAddress2, setStreetAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");



  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
      <h1>Address</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <label>
            Address Line 1
            <input
                type="text"
                value={}
                onChange={(e) => setChest(e.target.value)}
                required
            />
        </label>
        <label>
            Shoulders
            <input
                type="text"
                value={shoulders}
                onChange={(e) => setShoulders(e.target.value)}
                required
            />
        </label>
        <label>
          Sleeves
          <input
            type="text"
            value={sleeves}
            onChange={(e) => setSleeves(e.target.value)}
            required
          />
        </label>
        <label>
          Biceps
          <input
            type="text"
            value={biceps}
            onChange={(e) => setBiceps(e.target.value)}
            required
          />
        </label>
        <label>
          Wrist
          <input
            type="text"
            value={wrist}
            onChange={(e) => setWrists(e.target.value)}
            required
          />
        </label>
        <label>
          Waist
          <input
            type="text"
            value={waist}
            onChange={(e) => setWaists(e.target.value)}
            required
          />
        </label>

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default MeasurementPage;
