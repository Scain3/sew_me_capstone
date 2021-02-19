import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";


function MeasurementPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [chest, setChest] = useState("");
  const [shoulders, setShoulders] = useState("");
  const [sleeves, setSleeves] = useState("");
  const [biceps, setBiceps] = useState("");
  const [wrist, setWrists] = useState("");
  const [waist, setWaists] = useState("");
  const [jacketLength, setJacketLength] = useState("");
  const [height, setHeight] = useState("");
  const [hip, setHip] = useState("");
  const [thighCircumference, setThighCircumference] = useState("");
  const [kneeCircumference, setKneeCircumference] = useState("");
  const [ankleCircumference, setAnkleCircumference] = useState("");
  const [waistToAnkle, setWaistToAnkle] = useState("");
  const [ankleToKnee, setAnkleToKnee] = useState("");
  const [kneeToThigh, setKneeToThigh] = useState("");
  const [frontRise, setFrontRise] = useState("");
  const [backRise, setBackRise] = useState("");


  if (sessionUser) return <Redirect to="/" />;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (password === confirmPassword) {
  //     setErrors([]);
  //     return dispatch(sessionActions.signup({ email, username, password }))
  //       .catch(res => {
  //         if (res.data && res.data.errors) setErrors(res.data.errors);
  //       });
  //   }
  //   return setErrors(['Confirm Password field must be the same as the Password field']);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <h1>Measurements</h1>
      <form >
      {/* onSubmit={handleSubmit} */}
        {/* <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul> */}
        <label>
            Chest
            <input
                type="number"
                value={chest}
                onChange={(e) => setChest(e.target.value)}
                required
            />
        </label>
        <label>
            Shoulders
            <input
                type="number"
                value={shoulders}
                onChange={(e) => setShoulders(e.target.value)}
                required
            />
        </label>
        <label>
          Sleeves
          <input
            type="number"
            value={sleeves}
            onChange={(e) => setSleeves(e.target.value)}
            required
          />
        </label>
        <label>
          Biceps
          <input
            type="number"
            value={biceps}
            onChange={(e) => setBiceps(e.target.value)}
            required
          />
        </label>
        <label>
          Wrist
          <input
            type="number"
            value={wrist}
            onChange={(e) => setWrists(e.target.value)}
            required
          />
        </label>
        <label>
          Waist
          <input
            type="number"
            value={waist}
            onChange={(e) => setWaists(e.target.value)}
            required
          />
        </label>
        <label>
          Jacket Length
          <input
            type="number"
            value={jacketLength}
            onChange={(e) => setJacketLength(e.target.value)}
            required
          />
        </label>
        <label>
          Height
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </label>
        <label>
          Hip
          <input
            type="number"
            value={hip}
            onChange={(e) => setHip(e.target.value)}
            required
          />
        </label>
        <label>
          Thigh Circumference
          <input
            type="number"
            value={thighCircumference}
            onChange={(e) => setThighCircumference(e.target.value)}
            required
          />
        </label>
        <label>
          Knee Circumference
          <input
            type="number"
            value={kneeCircumference}
            onChange={(e) => setKneeCircumference(e.target.value)}
            required
          />
        </label>
        <label>
          Ankle Circumference
          <input
            type="number"
            value={ankleCircumference}
            onChange={(e) => setAnkleCircumference(e.target.value)}
            required
          />
        </label>
        <label>
          Waist To Ankle
          <input
            type="number"
            value={waistToAnkle}
            onChange={(e) => setWaistToAnkle(e.target.value)}
            required
          />
        </label>
        <label>
          Ankle To Knee
          <input
            type="number"
            value={ankleToKnee}
            onChange={(e) => setAnkleToKnee(e.target.value)}
            required
          />
        </label>
        <label>
          Knee To Thigh
          <input
            type="number"
            value={kneeToThigh}
            onChange={(e) => setKneeToThigh(e.target.value)}
            required
          />
        </label>
        <label>
          Front Rise
          <input
            type="number"
            value={frontRise}
            onChange={(e) => setFrontRise(e.target.value)}
            required
          />
        </label>
        <label>
          Back Rise
          <input
            type="number"
            value={backRise}
            onChange={(e) => setBackRise(e.target.value)}
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default MeasurementPage;
