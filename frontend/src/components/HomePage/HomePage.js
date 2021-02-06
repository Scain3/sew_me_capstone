import './Home.css';
import { NavLink } from 'react-router-dom';
import SignupFormModal from '../SignupFormModal';
import React from 'react';

const HomePage = () => {
    return(
        <div>
            <div className="top-main__div">
                <div className="top-main__header">Discover a New Shopping Experience</div>
                <div className="signup-container"><SignupFormModal /></div>
            </div>
            <div className="paragraph-container">
                <p className="home-paragrah__text">This is where I put all of the information about what this application is all about.</p>
            </div>
        </div>
    )
}

export default HomePage;
