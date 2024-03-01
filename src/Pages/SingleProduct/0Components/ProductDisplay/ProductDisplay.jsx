import React, { useContext, useState, useEffect } from "react";
import './ProductDisplay.css';
import { StoreContext } from "../../../../Context/StoreContext";
import ColorButton from "./0Components/ColorButton/ColorButton";
import AltImage from "./0Components/AltImages";
import { useLocation } from "react-router-dom";

const ProductDisplay = (props) => {
    const {product} = props;
    const {itemId} = props;
    const {addToCart} = useContext(StoreContext)
    console.log(itemId);

    const item = product.items.find((iteme) => iteme.id === itemId)
    const [mainImage, setMainImage] = useState(item.img[0])
    const [size, setSize] = useState(null)
    const [colorBtnSelected, setColorBtnSelected] = useState(item.color);
    const [sizeError, setSizeError] = useState(false)

    const changeMainImage = (image) => {
        setMainImage(image);
    }

    const ClickAddToCart = () => {
        if (size !== null){
            addToCart(product.id, itemId, size, item.color)
        }
        else{
            setSizeError(true)
        }
    }
    const SelectSize = (size) => {
        setSize(size)
        setSizeError(false)
    }

    const location = useLocation();
    
    useEffect(() => {
        changeMainImage(item.img[0])
        window.scrollTo(0, 0);
      }, [location]);

    return (
        <div className="product-display-container">
            <div className="product-display-contents">
                <div className="single-prod-gallery-container">
                    <div className="main-prod-img-container">
                        <img src={mainImage} className="main-prod-img" alt="" />
                    </div>
                    <div className="alt-images-container">
                        {item.img.map((image, imageIdx) => {
                            return <AltImage key={imageIdx} image={image} changeMainImage={() => changeMainImage(image)} />
                        })}
                    </div>
                </div>
                <div className="single-prod-info-container">
                    <p className="prod-name">{product.name}</p>
                    <p className="prod-price">${product.price}.00</p>
                    <div className="color-select">
                        <p><b>Color:</b> {String(colorBtnSelected).toUpperCase()}</p>
                        <div className="color-select-btns">
                            {product.items.map((item, iIdx) => {
                                return <ColorButton key={iIdx} id={product.id} iId={item.id} color={item.color} colorBtnSelected={colorBtnSelected} func={() => setColorBtnSelected(item.color)} changeMainImage={() => changeMainImage(item.img[0])} />
                            })}
                        </div>

                    </div>
                    <div className="size-select">
                        <p><b>Size:</b></p>
                        <div className="size-select-btns">
                            <button className={size === 'S' ? 'sizeBtn-select' : 'sizeBtn-noSelect'} onClick={() => SelectSize('S')}>S</button>
                            <button className={size === 'M' ? 'sizeBtn-select' : 'sizeBtn-noSelect'} onClick={() => SelectSize('M')}>M</button>
                            <button className={size === 'L' ? 'sizeBtn-select' : 'sizeBtn-noSelect'} onClick={() => SelectSize('L')}>L</button>
                            <button className={size === 'XL' ? 'sizeBtn-select' : 'sizeBtn-noSelect'} onClick={() => SelectSize('XL')}>XL</button>
                        </div>
                    </div>
                    <p className="error">{sizeError ? "Please select size" : null}</p>
                    <button className="add-cart-btn" onClick={() => (ClickAddToCart())}>Add To Cart</button>
                    <p className="prod-desc">
                        Oh look, another stylish piece. Step out in style with this fashionable item. A comfortable fit while looking good is all anyone can really ask for.
                        This item does it best. No matter the season, this piece will always be trendy. This item also comes in multiple colors so that you can pick the one
                        just right for you.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay