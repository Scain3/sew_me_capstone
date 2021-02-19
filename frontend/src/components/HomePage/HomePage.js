import { NavLink } from 'react-router-dom';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';
import SignupFormModal from '../SignupFormModal';
import {fetchMeasurements} from "../../store/measurements";
import './Home.css';




const HomePage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const measurements = useSelector(state => state.measurements.byId);
    const user = useSelector(state => state.session.user);

    useEffect(()=> {
        dispatch(fetchMeasurements());
    }, [dispatch])

    const handleClick = () => {
        if(!user){
            return history.push('/login');
        }
        const myMeasurements = measurements.filter((measurement) => measurement.userId === user.id);
        if(!myMeasurements){
            return history.push('/add-measurements');
         }
         //else{
        //     return history.push('/measurements');
        // }
        // if(!measurements) {
        //     return history.push('/add-measurements');
        // }

        dispatch(fetchMeasurements);
        return history.push('/measurements');
    }

    return(
        <div>
            <div className="top-main__div">
                <div className="top-main__header">Discover a New Shopping Experience</div>
                <div className="signup-container"><SignupFormModal /></div>
            </div>
            <div className="paragraph-container">
                <h1>Interested in your own customized outfit</h1>
                <p className="home-paragrah__text">It's as easy as 1-2-3.</p>
                <p className="home-paragrah__text">First provide your measurements.</p>
                <p className="home-paragrah__text">Then, pick a pattern.</p>
                <p className="home-paragrah__text">Last pick your desired fabric.</p>
                <p className="home-paragrah__text">That's it. Your customized clothing will arrive in no time.</p>
                <div className="top-images">
                    <img className="measurement-img" onClick={handleClick} src="https://images.pexels.com/photos/4620621/pexels-photo-4620621.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="measurements-chart" />
                    <img className="pattern-img" src="https://images.pexels.com/photos/4622401/pexels-photo-4622401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pick-a-pattern" />
                </div>
                <div className="bottom-img">
                    <img className="fabric-img" src="https://images.pexels.com/photos/4614231/pexels-photo-4614231.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pick-a-fabric" />
                </div>
            </div>
        </div>
    )
}

export default HomePage;
