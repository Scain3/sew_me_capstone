import {useSelector} from "react-redux";
import { useHistory} from "react-router-dom";
import '../Search/Search.css';


function Jumper(){
    const history = useHistory();
    const patterns = useSelector(state => Object.values(state.patterns));
    const jumpers = patterns.filter((pattern) => pattern.patternType === "jumper" )



    return(
        <div className="search-page__container">
            <div className="search-page__divs">{jumpers && jumpers.map((jumper, index)=> (
                <div className="product-container" key={index} onClick={()=>history.push(`patterns/${jumper.id}`)}>
                    <div><img className="search-page__img" src={jumper.image1} alt={jumper.patternNumber} /></div>
                    <div className="patternCompany">{jumper.patternCompany}</div>
                    <div className="patternNumber">{jumper.patternNumber}</div>
                    <div className="search-price">${jumper.price}</div>
                </div>
            ))}</div>
        </div>
    )




}

export default Jumper;
