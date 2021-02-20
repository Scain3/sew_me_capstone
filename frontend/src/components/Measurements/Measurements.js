import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
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
                {myMeasurements && myMeasurements.map((measurements, index) => (
                    <div key={index}>
                        <div>{` chest: ${measurements.chest}`}</div>
                        <div>{` shoulders: ${measurements.shoulders}`}</div>
                        <div>{` sleeves: ${measurements.sleeves}`}</div>
                        <div>{` biceps: ${measurements.biceps}`}</div>
                        <div>{` wrist: ${measurements.wrist}`}</div>
                        <div>{` waist: ${measurements.waist}`}</div>
                        <div>{` jacketLength: ${measurements.jacketLength}`}</div>
                        <div>{` height: ${measurements.height}`}</div>
                    </div>
                ))}
            </div>
        )

    console.log("myMeasurements", myMeasurements);




}

export default Measurements;
