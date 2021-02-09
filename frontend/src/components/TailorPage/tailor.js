import { useSelector, useDispatch} from "react-redux";
import {removeTailoredProduct} from "../../store/tailor";
//import {tailorProductInfo} from "../../store/tailor";
//import { useParams } from "react-router-dom";
import './Tailor.css';

function Tailor(){
    const tailorItem = useSelector(state => Object.values(state.tailor));
    const dispatch = useDispatch();
    console.log(tailorItem);
    //const { id } = useParams();

    // const singleItem = tailor.filter((item)=>{
    //     return item.id === id
    // })

    // const singleItem = tailor[id];
    // console.log(singleItem);

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
