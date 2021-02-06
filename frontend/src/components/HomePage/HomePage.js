import './Home.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

const HomePage = () => {
    return(
        <div>
            <div className="top-main__div">
                <div className="top-main__header">Discover a New Shopping Experience</div>
                <div className="signup-container"><NavLink className="signup" to="/signup">Sign Up</NavLink></div>
            </div>
        </div>
    )
}

export default HomePage;
