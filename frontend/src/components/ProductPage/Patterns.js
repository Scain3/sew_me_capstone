import { useSelector } from "react-redux";
import {useHistory} from "react-router-dom";

import "./Product.css";

function Patterns(){
    const patterns = useSelector(state => Object.values(state.patterns));
    const history = useHistory();



    return(
        <div className="product-container" >
            {patterns.map((pattern, index) => (
                <div key={index} >
                    <div className="pattern-block" onClick={()=>history.push(`/patterns/${pattern.id}`)}>
                        <div>{`${pattern.patternCompany} ${pattern.patternNumber}`}</div>
                        <img className="images" src={pattern.image1} alt={ `${pattern.patternCompany} ${pattern.patternNumber}`} />
                        <div>${pattern.price}</div>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default Patterns;
