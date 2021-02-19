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

    console.log("user", user);
    //console.log("userId", user.id);
    const userId = user.id;
    console.log("userId", userId);
    console.log("measurements", measurements);


    useEffect(()=> {
        dispatch(fetchMeasurements());
    }, [dispatch])

    console.log("user", user);


    //console.log("measurements", measurements);


    // if (measurements === undefined){
    //     return <MeasurementPage />
    // }
    if(!measurements){
        return null;
    }
    
    const myMeasurements = measurements.filter((measurement) => measurement.userId === userId)

    console.log("myMeasurements", myMeasurements);




    return(
        <div>
            {myMeasurements && myMeasurements.map((measurements, index) => (
                <div>
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

}

export default Measurements;
