import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useParams, useHistory } from "react-router-dom";

import { fetchSingleProduct } from "../../store/product";

function SingleProductPage(){
    const singleItem = useSelector(state => state.product);
    const { id } = useParams();
    const dispatch = useDispatch();
    // const singleItem = products[id];

    useEffect((id)=> {
        dispatch(fetchSingleProduct(id));
    }, [dispatch], id)

    if(!singleItem){
        return null;
    }

    return(
        <div>
            {}
        </div>
    )




}
