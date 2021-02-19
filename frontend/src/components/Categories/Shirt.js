import {useSelector} from "react-redux";
import { useHistory} from "react-router-dom";
import '../Search/Search.css';


function Shirt(){
    const history = useHistory();
    const patterns = useSelector(state => Object.values(state.patterns));
    const shirts = patterns.filter((pattern) => pattern.patternType === "shirt" )



    return(
        <div className="search-page__container">
            <div className="search-page__divs">{shirts && shirts.map((shirt, index)=> (
                <div className="product-container" key={index} onClick={()=>history.push(`patterns/${shirt.id}`)}>
                    <div><img className="search-page__img" src={shirt.image1} alt={shirt.patternNumber} /></div>
                    <div className="patternCompany">{shirt.patternCompany}</div>
                    <div className="patternNumber">{shirt.patternNumber}</div>
                    <div className="search-price">${shirt.price}</div>
                </div>
            ))}</div>
        </div>
    )




}

export default Shirt;
