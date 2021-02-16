import {useSelector} from "react-redux";
import { useHistory} from "react-router-dom";
import '../Search/Search.css';


function Suit(){
    const history = useHistory();
    const patterns = useSelector(state => Object.values(state.patterns));
    const suits = patterns.filter((pattern) => pattern.patternType === "suits" )



    return(
        <div className="search-page__container">
            <div className="search-page__divs">{suits && suits.map((suit, index)=> (
                <div className="product-container" key={index} onClick={()=>history.push(`patterns/${suit.id}`)}>
                    <div><img className="search-page__img" src={suit.image1} alt={suit.patternNumber} /></div>
                    <div className="patternCompany">{suit.patternCompany}</div>
                    <div className="patternNumber">{suit.patternNumber}</div>
                    <div className="search-price">${suit.price}</div>
                </div>
            ))}</div>
        </div>
    )




}

export default Suit;
