import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchMeasurements } from "../../store/measurements";


function Measurements(){
    const measurements = useSelector(state => state.measurements);
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchMeasurements());
    }, [dispatch])

    return(
        <h1>Hello World!</h1>
    )

}

export default Measurements;
