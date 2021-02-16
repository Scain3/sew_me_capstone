import { useEffect, useDispatch } from "react";
import {useSelector} from "react-redux";
import {useParams, useHistory} from "react-router-dom";
import '../Search/Search.css';


function Coats(){
    const history = useHistory();
    const patterns = useSelector(state => Object.values(state.patterns));
    const coats = patterns.filter((pattern) => pattern.patternType === "coat" )



    return(
        <div className="search-page__container">
            <div className="search-page__divs">{coats && coats.map((coat, index)=> (
                <div className="product-container" key={index} onClick={()=>history.push(`patterns/${coat.id}`)}>
                    <div><img className="search-page__img" src={coat.image1} alt={coat.patternNumber} /></div>
                    <div className="patternCompany">{coat.patternCompany}</div>
                    <div className="patternNumber">{coat.patternNumber}</div>
                    <div className="search-price">${coat.price}</div>
                </div>
            ))}</div>
        </div>
    )




}

export default Coats;
