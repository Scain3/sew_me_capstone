import { useSelector } from "react-redux";
import "./Product.css";
function Patterns(){
    const patterns = useSelector(state => Object.values(state.patterns));
    console.log(patterns);

    return(
        <div>
            hello World
        </div>
    )

}

export default Patterns;
