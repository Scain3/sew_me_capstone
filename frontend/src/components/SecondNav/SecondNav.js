import {NavLink} from 'react-router-dom';
import React from 'react';
import {useDispatch} from "react-redux";
import {fetchPatterns} from "../../store/pattern";
import './SecondNav.css';


function SecondNav(){
    const dispatch = useDispatch();

    return(
        <div className="clothes-links-container">

                <span className="clothes-links">

                    <NavLink className="clothes coat" to="/coat" onClick={()=>{dispatch(fetchPatterns())}}>Coat</NavLink>

                    <NavLink className="clothes dress" to="/dress">Dress</NavLink>

                    <NavLink className="clothes jacket" to="/jacket">Jacket</NavLink>

                    <NavLink className="clothes pants" to="/pants">Pants</NavLink>

                    <NavLink className="clothes shirt" to="/shirt">Shirt</NavLink>

                    <NavLink className="clothes skirt" to="/skirt">Skirt</NavLink>

                    <NavLink className="clothes suit" to="/suit">Suit</NavLink>
                </span>


        </div>
    )
}

export default SecondNav;
