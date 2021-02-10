import { useSelector, useDispatch} from "react-redux";
import {removeTailoredProduct} from "../../store/tailor";
import './Tailor.css';

function Tailor(){
    const tailorItem = useSelector(state => Object.values(state.tailor));
    const dispatch = useDispatch();
    console.log(tailorItem);


    return(
    <div>
        <div>{tailorItem.map((single)=>(
            <div>
                <div>{single.type}</div>
                <img src={single.patternImage} alt={single.type} />
                <div>{single.price}</div>
                <div><button onClick={()=>{dispatch(removeTailoredProduct(single.id))}}>Remove</button></div>
            </div>
        ))}</div>
    </div>
    )
}

export default Tailor;
