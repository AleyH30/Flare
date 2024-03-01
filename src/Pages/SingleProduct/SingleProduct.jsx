import React, { useContext } from "react";
import ProductDisplay from "./0Components/ProductDisplay/ProductDisplay";
import {StoreContext} from '../../Context/StoreContext';
import { useParams } from 'react-router-dom';
import Featured from "../0Components/Featured/Featured";

const SingleProduct = () => {

    const {products} = useContext(StoreContext);
    const {ProductId, ItemId, ItemSize} = useParams();
    const product = products.find((producte)=> producte.id ===Number(ProductId));
    
    return (
        <div className="product-page">
            <ProductDisplay product={product} itemId={ItemId} itemSize={ItemSize} />
            <Featured header={"Suggested..."}/>
        </div>
    )
}

export default SingleProduct