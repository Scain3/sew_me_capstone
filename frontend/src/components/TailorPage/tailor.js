import { useSelector, useDispatch} from "react-redux";
import {tailorProductInfo} from "../../store/tailor";
import './Tailor.css';

function Tailor(){
    const tailor = useSelector(state => Object.values(state.tailor));

    return(
        <div>{tailor.map((tailorItem) => (
            <div>
                <div>{tailorItem.type}</div>
                <div>{tailorItem.price}</div>
                <div><img src={tailorItem.patternImage} alt={tailorItem.type} /></div>
            </div>
        ))}
        </div>
    )
}

export default Tailor;
