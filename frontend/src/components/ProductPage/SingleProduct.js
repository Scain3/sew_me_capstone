import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useParams, useHistory } from "react-router-dom";

import { fetchSinglePattern, fetchProducts } from "../../store/product";

function SingleProductPage(){
    const products = useSelector(state => state.product);
    const { id } = useParams();
    const dispatch = useDispatch();
    const singleItem = products[id];

    useEffect(()=> {
        dispatch(fetchProducts());
    }, [dispatch])

    if(!singleItem){
        return null;
    }

    return(
        <div>
            {singleItem.title}
        </div>
    )




}

export default SingleProductPage;
