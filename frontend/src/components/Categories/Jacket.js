import { useEffect, useDispatch } from "react";
import {useSelector} from "react-redux";
import {useParams, useHistory} from "react-router-dom";
import '../Search/Search.css';


function Jacket(){
    const history = useHistory();
    const patterns = useSelector(state => Object.values(state.patterns));
    const jackets = patterns.filter((pattern) => pattern.patternType === "jacket" )



    return(
        <div className="search-page__container">
            <div className="search-page__divs">{jackets && jackets.map((jacket, index)=> (
                <div className="product-container" key={index} onClick={()=>history.push(`patterns/${jacket.id}`)}>
                    <div><img className="search-page__img" src={jacket.image1} alt={jacket.patternNumber} /></div>
                    <div className="patternCompany">{jacket.patternCompany}</div>
                    <div className="patternNumber">{jacket.patternNumber}</div>
                    <div className="search-price">${jacket.price}</div>
                </div>
            ))}</div>
        </div>
    )




}

export default Jacket;
