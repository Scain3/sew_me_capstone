import { useDispatch, useSelector } from "react-redux";
import {useParams,useHistory} from "react-router-dom";
import {tailorProductInfo} from "../../store/tailor";
import "./Product.css";

function Patterns(){
    const patterns = useSelector(state => Object.values(state.patterns));
    const user = useSelector(state => state.session.user);
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        if(!user){
            return history.push('/login');
        }
        const patternId = patterns[id].id;
        dispatch(tailorProductInfo(patternId, user.id))
        history.push('/tailor')
    }

    return(
        <div className="product-container" >
            {patterns.map((pattern, index) => (
                <div key={index} >
                    <div className="pattern-block" onClick={()=>history.push(`/patterns/${pattern.id}`)}>
                        <div>{`${pattern.patternCompany} ${pattern.patternNumber}`}</div>
                        <img className="images" src={pattern.image1} alt={ `${pattern.patternCompany} ${pattern.patternNumber}`} />
                        <div>${pattern.price}</div>
                    </div>
                    <div><button onClick={handleClick}>tailor-this</button></div>
                </div>
            ))}
        </div>
    )

}

export default Patterns;
