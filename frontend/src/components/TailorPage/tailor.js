import { useSelector, useDispatch} from "react-redux";
import {removeTailoredProduct} from "../../store/tailor";
import './Tailor.css';

function Tailor(){
    const tailorItem = useSelector(state => state.tailor);
    const dispatch = useDispatch();
    console.log(tailorItem);


    return(
    <div>
        <div>
            <div>{tailorItem.type}</div>
            <img src={tailorItem.patternImage} alt={tailorItem.type} />
            <div>{tailorItem.price}</div>
            <div><button onClick={()=>{dispatch(removeTailoredProduct(tailorItem.id))}}>Remove</button></div>
        </div>

    </div>
    )
}

export default Tailor;
