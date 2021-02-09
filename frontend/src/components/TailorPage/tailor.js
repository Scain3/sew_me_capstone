import { useSelector, useDispatch} from "react-redux";
import {tailorProducts} from "../../store/tailor";
import './Tailor.css';

function Tailor(){
    const tailor = useSelector(state => state.tailor);

    return(
        <h1>Hello World!</h1>
    )
}

export default Tailor;
