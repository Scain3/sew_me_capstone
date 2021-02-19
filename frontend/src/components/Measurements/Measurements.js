import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchMeasurements } from "../../store/measurements";
import MeasurementPage from "../MeasurementsModal/Measurement";


function Measurements(){
    const measurements = useSelector(state => state.measurements.byId);
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

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

    // if(!user.id){
    //     <MeasurementPage />
    // }

    const myMeasurements = measurements.filter((measurement) => measurement.userId === userId)
    console.log("myMeasurements", myMeasurements);



    return(
        <h1>Hello World!</h1>
    )

}

export default Measurements;
