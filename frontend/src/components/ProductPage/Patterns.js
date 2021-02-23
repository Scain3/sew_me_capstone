import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {fetchPatterns} from "../../store/pattern";

import "./Product.css";

function Patterns(){
    const patterns = useSelector(state => Object.values(state.patterns));
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchPatterns());
    }, [dispatch])



    return(
        <div className="all-product-container" >
            {patterns.map((pattern, index) => (
                <div key={index} >
                    <div className="pattern-block" onClick={()=>history.push(`/patterns/${pattern.id}`)}>
                        <div className="header">{`${pattern.patternCompany} ${pattern.patternNumber}`}</div>
                        <div><img className="images" src={pattern.image1} alt={ `${pattern.patternCompany} ${pattern.patternNumber}`} /></div>
                        <div className="price">${pattern.price}</div>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default Patterns;
