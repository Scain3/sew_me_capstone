import React from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import './Search.css';

function SearchPage(){
    const history = useHistory();

    const patternInfo = useSelector(state => state.search.pattern);
    const fabricInfo = useSelector(state => state.search.fabric);

    // const dispatch = useDispatch();

    return(
        <div className="search-page__container">
            <div>{patternInfo && patternInfo.map((pattern)=> (
                <div><img src={pattern.image1} alt={pattern.patternNumber} /></div>
            ))}</div>

            <div>{fabricInfo && fabricInfo.map((fabric)=> (
                <div><img src={fabric.image} atl={fabric.type} /></div>
            ) )}</div>
        </div>
    )


}

export default SearchPage;
