import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {fetchAddMeasurements} from "../../store/measurements";
import './Measurements.css';


function MeasurementPage() {
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
  const userId = useSelector(state => state.session.user.id);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const measurements = {userId, chest, shoulders, sleeves, biceps, wrist, waist, jacketLength,
      height, hip, thighCircumference, kneeCircumference, ankleCircumference, waistToAnkle, ankleToKnee,
      kneeToThigh, backRise, frontRise}
      await dispatch(fetchAddMeasurements(measurements));
      history.push('/')
  }

  return (
    <div className="measurement-div">
      <h1 className="measurement-form__heading">Measurements</h1>
      <form className="measurement-form" onSubmit={handleSubmit}>
        <div className="measurement-form_input-container">
          <label className="measurement-form_input-label">
              Chest
          </label>
              <input
                  className="measurement-form_input-box"
                  name="chest"
                  type="number"
                  value={chest}
                  onChange={(e) => setChest(e.target.value)}
                  required
              />
        </div>
        <div className="measurement-form_input-container">
          <label className="measurement-form_input-label">
              Shoulders
          </label>
              <input
                  className="measurement-form_input-box"
                  name="shoulders"
                  type="number"
                  value={shoulders}
                  onChange={(e) => setShoulders(e.target.value)}
                  required
              />
        </div>
        <div className="measurement-form_input-container">
          <label className="measurement-form_input-label">
            Sleeves
          </label>
            <input
              className="measurement-form_input-box"
              name="sleeves"
              type="number"
              value={sleeves}
              onChange={(e) => setSleeves(e.target.value)}
              required
            />
        </div>
        <div className="measurement-form_input-container">
          <label className="measurement-form_input-label">
            Biceps
          </label>
            <input
              className="measurement-form_input-box"
              name="biceps"
              type="number"
              value={biceps}
              onChange={(e) => setBiceps(e.target.value)}
              required
            />
        </div>
        <div className="measurement-form_input-container">
          <label className="measurement-form_input-label">
            Wrist
          </label>
            <input
              className="measurement-form_input-box"
              name="wrist"
              type="number"
              value={wrist}
              onChange={(e) => setWrists(e.target.value)}
              required
            />
        </div>
        <div className="measurement-form_input-container">
          <label className="measurement-form_input-label">
            Waist
          </label>
            <input
              className="measurement-form_input-box"
              name="waist"
              type="number"
              value={waist}
              onChange={(e) => setWaists(e.target.value)}
              required
            />
        </div>
        <div className="measurement-form_input-container">
          <label className="measurement-form_input-label">
            Jacket Length
          </label>
            <input
              className="measurement-form_input-box"
              name="jacketLength"
              type="number"
              value={jacketLength}
              onChange={(e) => setJacketLength(e.target.value)}
              required
            />
        </div>
        <div className="measurement-form_input-container">
          <label className="measurement-form_input-label">
            Height
          </label>
            <input
              className="measurement-form_input-box"
              name="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
        </div>
        <div className="measurement-form_input-container">
          <label className="measurement-form_input-label">
            Hip
          </label>
            <input
              className="measurement-form_input-box"
              name="hip"
              type="number"
              value={hip}
              onChange={(e) => setHip(e.target.value)}
              required
            />
        </div>
        <div className="measurement-form_input-container">
          <label className="measurement-form_input-label">
            Thigh Circumference
          </label>
            <input
              className="measurement-form_input-box"
              name="thighCircumference"
              type="number"
              value={thighCircumference}
              onChange={(e) => setThighCircumference(e.target.value)}
              required
            />
        </div>
        <div className="measurement-form_input-container">
          <label className="measurement-form_input-label">
            Knee Circumference
          </label>
            <input
              className="measurement-form_input-box"
              name="kneeCircumference"
              type="number"
              value={kneeCircumference}
              onChange={(e) => setKneeCircumference(e.target.value)}
              required
            />
        </div>
        <div className="measurement-form_input-container">
          <label className="measurement-form_input-label">
            Ankle Circumference
          </label>
            <input
              className="measurement-form_input-box"
              name="ankleCircumference"
              type="number"
              value={ankleCircumference}
              onChange={(e) => setAnkleCircumference(e.target.value)}
              required
            />
        </div>
        <div className="measurement-form_input-container">
          <label className="measurement-form_input-label">
            Waist To Ankle
          </label>
            <input
              className="measurement-form_input-box"
              name="waistToAnkle"
              type="number"
              value={waistToAnkle}
              onChange={(e) => setWaistToAnkle(e.target.value)}
              required
            />
        </div>
        <div className="measurement-form_input-container">
          <label className="measurement-form_input-label">
            Ankle To Knee
          </label>
            <input
              className="measurement-form_input-box"
              name="ankleToKnee"
              type="number"
              value={ankleToKnee}
              onChange={(e) => setAnkleToKnee(e.target.value)}
              required
            />
        </div>
        <div className="measurement-form_input-container">
          <label className="measurement-form_input-label">
            Knee To Thigh
          </label>
            <input
              className="measurement-form_input-box"
              name="kneeToThigh"
              type="number"
              value={kneeToThigh}
              onChange={(e) => setKneeToThigh(e.target.value)}
              required
            />
        </div>
        <div className="measurement-form_input-container">
          <label className="measurement-form_input-label">
            Front Rise
          </label>
            <input
              className="measurement-form_input-box"
              name="frontRise"
              type="number"
              value={frontRise}
              onChange={(e) => setFrontRise(e.target.value)}
              required
            />
        </div>
        <div className="measurement-form_input-container">
          <label className="measurement-form_input-label">
            Back Rise
          </label>
            <input
              className="measurement-form_input-box"
              name="backRise"
              type="number"
              value={backRise}
              onChange={(e) => setBackRise(e.target.value)}
              required
            />
        </div>
        <button className="measurement-form__submit" type="submit">Add Measurements</button>
      </form>
    </div>
  );
}

export default MeasurementPage;
