import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import './Measurements.css';
import { fetchMeasurements } from "../../store/measurements";
import MeasurementPage from "../MeasurementsModal/Measurement";


function Measurements(){
    const measurements = useSelector(state => state.measurements.byId);
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    if(!user){
        return null;
    }

    const userId = user.id;
    console.log("user", user);




    if(!measurements){
        return null;
    }

    const myMeasurements = measurements.filter((measurement) => measurement.userId === userId);




        return(
            <div>
                <h1 className="measurements-header">Measurements</h1>
                {myMeasurements && myMeasurements.map((measurements, index) => (
                    <div key={index} className="measure-div">
                        <div className="measure measurements-chest">{` chest: ${measurements.chest}`}</div>
                        <div className="measure measurements-shoulder">{` shoulders: ${measurements.shoulders}`}</div>
                        <div className="measure measurements-sleeves">{` sleeves: ${measurements.sleeves}`}</div>
                        <div className="measure measurements-biceps">{` biceps: ${measurements.biceps}`}</div>
                        <div className="measure measurements-wrist">{` wrist: ${measurements.wrist}`}</div>
                        <div className="measure measurements-waist">{` waist: ${measurements.waist}`}</div>
                        <div className="measure measurements-jacket">{` jacketLength: ${measurements.jacketLength}`}</div>
                        <div className="measure measurements-height">{` height: ${measurements.height}`}</div>
                    </div>
                ))}
            </div>
        )

    console.log("myMeasurements", myMeasurements);




}

export default Measurements;
