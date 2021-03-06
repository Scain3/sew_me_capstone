import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function AddressPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [streetAddress1, setStreetAddress1] = useState("");
  const [streetAddress2, setStreetAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");



  if (sessionUser) return <Redirect to="/" />;


  return (
    <>
      <h1>Address</h1>
      <form >
      
        <label>
            Address Line 1
            <input
                type="text"
                value={streetAddress1}
                onChange={(e) => setStreetAddress1(e.target.value)}
                required
            />
        </label>
        <label>
            Address Line 2
            <input
                type="text"
                value={streetAddress2}
                onChange={(e) => setStreetAddress2(e.target.value)}
                required
            />
        </label>
        <label>
          City
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        <label>
          State
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </label>
        <label>
          Country
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </label>
        <label>
          Postal Code
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </label>

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default AddressPage;
