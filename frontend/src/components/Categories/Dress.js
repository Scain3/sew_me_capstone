import {useSelector} from "react-redux";
import { useHistory} from "react-router-dom";
import '../Search/Search.css';


function Dress(){
    const history = useHistory();
    const patterns = useSelector(state => Object.values(state.patterns));
    const dresses = patterns.filter((pattern) => pattern.patternType === "dress" )



    return(
        <div className="search-page__container">
            <div className="search-page__divs">{dresses && dresses.map((dress, index)=> (
                <div className="product-container" key={index} onClick={()=>history.push(`patterns/${dress.id}`)}>
                    <div><img className="search-page__img" src={dress.image1} alt={dress.patternNumber} /></div>
                    <div className="patternCompany">{dress.patternCompany}</div>
                    <div className="patternNumber">{dress.patternNumber}</div>
                    <div className="search-price">${dress.price}</div>
                </div>
            ))}</div>
        </div>
    )




}

export default Dress;
