import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {fetchFabrics} from "../../store/fabric";

import "./Product.css";

function Fabrics(){
    const fabrics = useSelector(state => Object.values(state.fabrics));
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchFabrics());
    }, [dispatch])

    return(
        <div className="all-product-container" >
            {fabrics.map((fabric, index) => (
                <div key={index} >
                    <div className="pattern-block" onClick={()=>history.push(`/fabrics/${fabric.id}`)}>
                        <div className="header">{`${fabric.color} ${fabric.type}`}</div>
                        <div><img className="images" src={fabric.image} alt={ `${fabric.color} ${fabric.type}`} /></div>
                        <div className="price">${fabric.price}</div>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default Fabrics;
