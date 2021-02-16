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
                <h1>Interested in your own customized outfit</h1>
                <p className="home-paragrah__text">It's as easy as 1-2-3.</p>
                <p className="home-paragrah__text">First provide your measurements.</p>
                <p className="home-paragrah__text">Then, pick a pattern.</p>
                <p className="home-paragrah__text">Last pick your desired fabric.</p>
                <p className="home-paragrah__text">That's it. Your customized clothing will arrive in no time.</p>
                <div>
                    <img src="https://thumbs.dreamstime.com/b/woman-body-measurement-chart-scheme-measurement-human-body-sewing-clothes-female-figure-front-back-views-template-186093385.jpg" alt="measurements-chart" />
                </div>
            </div>
        </div>
    )
}

export default HomePage;
