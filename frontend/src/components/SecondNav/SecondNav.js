import {NavLink} from 'react-router-dom';
import React from 'react';
import {useDispatch} from "react-redux";
import {fetchPatterns} from "../../store/pattern";
import './SecondNav.css';


function SecondNav(){
    const dispatch = useDispatch();

    return(
        <div className="clothes-links-container">

            <div><NavLink className="clothes coat" to="/coat" onClick={()=>{dispatch(fetchPatterns())}}>Coat</NavLink></div>

            <div>
                <NavLink className="clothes dress" to="/dress" onClick={()=>{dispatch(fetchPatterns())}}>Dress</NavLink>
            </div>

            <div>
                <NavLink className="clothes jacket" to="/jacket" onClick={()=>{dispatch(fetchPatterns())}}>Jacket</NavLink>
            </div>

            <div>
                <NavLink className="clothes jumper" to="/jumper" onClick={()=>{dispatch(fetchPatterns())}}>Jumper</NavLink>
            </div>

            <div>
                <NavLink className="clothes pants" to="/pants" onClick={()=>{dispatch(fetchPatterns())}}>Pants</NavLink>
            </div>

            <div>
                <NavLink className="clothes shirt" to="/shirt" onClick={()=>{dispatch(fetchPatterns())}}>Shirt</NavLink>
            </div>

            <div>
                <NavLink className="clothes skirt" to="/skirt" onClick={()=>{dispatch(fetchPatterns())}}>Skirt</NavLink>
            </div>

            <div>
                <NavLink className="clothes suit" to="/suit" onClick={()=>{dispatch(fetchPatterns())}}>Suit</NavLink>
            </div>



        </div>
    )
}

export default SecondNav;
