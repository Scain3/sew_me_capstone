import {useSelector} from "react-redux";
import { useHistory} from "react-router-dom";
import '../Search/Search.css';


function Skirt(){
    const history = useHistory();
    const patterns = useSelector(state => Object.values(state.patterns));
    const skirts = patterns.filter((skirt) => skirt.patternType === "skirt" )



    return(
        <div className="search-page__container">
            <div className="search-page__divs">{skirts && skirts.map((skirt, index)=> (
                <div className="product-container" key={index} onClick={()=>history.push(`patterns/${skirt.id}`)}>
                    <div><img className="search-page__img" src={skirt.image1} alt={skirt.patternNumber} /></div>
                    <div className="patternCompany">{skirt.patternCompany}</div>
                    <div className="patternNumber">{skirt.patternNumber}</div>
                    <div className="search-price">${skirt.price}</div>
                </div>
            ))}</div>
        </div>
    )




}

export default Skirt;
