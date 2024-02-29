import React, { useContext, useState, useEffect} from "react";
import './Category.css';
import Filter from "./0Components/Filter/Filter";
import Item from "./0Components/Items/Item";
import { StoreContext } from "../../Context/StoreContext";
import { useLocation } from "react-router-dom";


const Category = (props) => {
  const [reactRender, setReactRender] = useState(true);
  const { products } = useContext(StoreContext);
  

  const ColorFilterArr = []

  const ForceRender = () => {
    setReactRender(!reactRender);
  }
  
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [location])

  return (
    <div className="category-page">
      <div className="category-container">
        <div className="category-filter">
          <Filter set={ForceRender} products={products} cfa={ColorFilterArr} />
        </div>
        <div className="category-products">
          {products.map((product, i) => {
            if (props.category === product.category || props.category === "") {
              return product.items.map((item, iIdx) => {
                item.color.forEach((color) => {
                  if (!ColorFilterArr.includes(color)) {
                    ColorFilterArr.push(color)
                  }
                })
                if (item.visibility === true) {
                  return <Item key={iIdx} id={product.id} name={product.name} image={item.img[0]} price={product.price} itemId={item.id} itemIndex={iIdx} />
                }
                else { return null; }
              });
            }
            else { return null; }
          })}
        </div>
      </div>
    </div>
    
  )
}

export default Category