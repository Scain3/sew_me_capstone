import {useSelector} from "react-redux";
import { useHistory} from "react-router-dom";
import '../Search/Search.css';


function Dress(){
    const history = useHistory();
    const patterns = useSelector(state => Object.values(state.patterns));
    const allPants = patterns.filter((pattern) => pattern.patternType === "pants" )



    return(
        <div className="search-page__container">
            <div className="search-page__divs">{allPants && allPants.map((pants, index)=> (
                <div className="product-container" key={index} onClick={()=>history.push(`patterns/${pants.id}`)}>
                    <div><img className="search-page__img" src={pants.image1} alt={pants.patternNumber} /></div>
                    <div className="patternCompany">{pants.patternCompany}</div>
                    <div className="patternNumber">{pants.patternNumber}</div>
                    <div className="search-price">${pants.price}</div>
                </div>
            ))}</div>
        </div>
    )




}

export default Dress;
