import React from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import './Search.css';

function SearchPage(){
    const history = useHistory();

    const patternInfo = useSelector(state => state.search.pattern);
    const fabricInfo = useSelector(state => state.search.fabric);

    const dispatch = useDispatch();

    return(
        <div>{searchInfo && searchInfo.map((search)=> (
            <div><img src={search} /></div>
        ))}</div>
    )


}
