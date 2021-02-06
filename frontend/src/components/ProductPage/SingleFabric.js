import {useEffect} from "react";

import { useDispatch, useSelector} from "react-redux";

import {useParams} from "react-router-dom";

import {fetchFabrics} from "../../store/fabric";

function SingleFabricPage(){
    const fabrics = useSelector(state => state.fabrics);
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchFabrics());
    }, [dispatch])

    const singleItem = fabrics[id];

    if(!singleItem){
        return null;
    }

    return(
        <div className="single-product__container">
            <img className="main-product__image" src={singleItem.image} alt={singleItem.type} />
            <div className="single-product__description">
                <div className="fabric-name">
                    <span className="product-header fabric-color" >{singleItem.color}</span>
                    <span className="product-header fabric-type" >{singleItem.type}</span>
                </div>
                <div className="price">${singleItem.price}</div>
                <div><button>Add To Cart</button></div>
                <div><button>Tailor This!</button></div>
            </div>
        </div>
    )
}

export default SingleFabricPage;
