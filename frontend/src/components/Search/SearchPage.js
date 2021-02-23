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
            <div className="search-page__divs">{patternInfo && patternInfo.map((pattern, index)=> (
                <div className="product-container" key={index} onClick={()=>history.push(`patterns/${pattern.id}`)}>
                    <div><img className="search-page__img" src={pattern.image1} alt={pattern.patternNumber} /></div>
                    <div className="patternCompany">{pattern.patternCompany}</div>
                    <div className="patternNumber">{pattern.patternNumber}</div>
                    <div className="search-price">${pattern.price}</div>
                </div>
            ))}</div>

            <div className="search-page__divs">{fabricInfo && fabricInfo.map((fabric, index)=> (
                <div className="search-product-container" key={index} onClick={()=>history.push(`fabrics/${fabric.id}`)}>
                    <div><img className="search-page__img" src={fabric.image} alt={fabric.type} /></div>
                    <div className="fabric-details">
                        <span className="fabric-color">{fabric.color}</span>
                        <span className="fabric-type">{fabric.type}</span>
                    </div>
                    <div className="search-price">${fabric.price}</div>
                </div>
            ) )}</div>
        </div>
    )


}

export default SearchPage;
