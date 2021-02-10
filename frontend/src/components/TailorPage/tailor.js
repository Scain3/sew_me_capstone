import { useSelector, useDispatch} from "react-redux";
import {removeTailoredProduct} from "../../store/tailor";
import './Tailor.css';

function Tailor(){
    const tailorItem = useSelector(state => state.tailor);
    const dispatch = useDispatch();
    console.log(tailorItem);


    return(
    <div className="tailor-container">
        <div className="tailor-pattern">
            <div>{tailorItem.type}</div>
            <img src={tailorItem.patternImage} alt={tailorItem.type} />
            <div>{tailorItem.price}</div>
            <div><button onClick={()=>{dispatch(removeTailoredProduct(tailorItem.id))}}>Remove</button></div>
        </div>

        <div className="tailor-fabric">
            <div>{tailorItem.fabricColor}</div>
            <img src={tailorItem.fabricImage} alt={tailorItem.fabricType} />
        </div>

    </div>
    )
}

export default Tailor;
