import { useSelector, useDispatch} from "react-redux";
import {tailorProductInfo} from "../../store/tailor";
import './Tailor.css';

function Tailor(){
    const tailor = useSelector(state => Object.values(state.tailor));

    return(
        <div>
            <div>{tailor[0].type}</div>
            <div>{tailor[0].price}</div>
            <div><img src={tailor[0].patternImage} alt={tailor[0].type} /></div>
        </div>
    )
}

export default Tailor;
