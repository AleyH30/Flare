import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import './Filter.css';
import ColorFilterSlots from './0Components/ColorFilterSlots';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

const sizeSelectedArr = [];
const colorSelectedArr = [];
const priceSelectedArr = [];
const checkboxHolders = [];
var checkbox;

const Filter = (props) => {
    const [sidebarFilterActive, setSidebarFilterActive] = useState(false);

    var matches = false;

    const AddRemoveClass = (category, name) => (event) => {
        checkbox = event.target
        if (event.target.checked === true) {
            checkboxHolders.push(checkbox)
            //console.log(checkboxHolders)
            if (category === "size") {
                sizeSelectedArr.push(name); //add name of category class to array
                //console.log(sizeSelectedArr)
            }
            else if (category === "color") {
                colorSelectedArr.push(name);
                //console.log(colorSelectedArr)
            }
            else if (category === "price") {
                priceSelectedArr.push(name);
                //console.log(priceSelectedArr)
            }
        }
        else if (event.target.checked === false) {
            const checkboxIdx = checkboxHolders.indexOf(checkbox);
            checkboxHolders.splice(checkboxIdx, 1);
            //console.log(checkboxHolders)
            if (category === "size") {
                const index = sizeSelectedArr.indexOf(name); //remove name of category class from array
                sizeSelectedArr.splice(index, 1);
                //console.log(sizeSelectedArr)
            }
            else if (category === "color") {
                const index = colorSelectedArr.indexOf(name);
                colorSelectedArr.splice(index, 1);
                //console.log(colorSelectedArr)
            }
            else if (category === "price") {
                const index = priceSelectedArr.indexOf(name);
                priceSelectedArr.splice(index, 1);
                //console.log(priceSelectedArr)
            }
        }
        props.products.forEach((product) => {
            product.items.forEach((item) => {
                item.visibility = true;
            })
        });
        if (sizeSelectedArr.length === 0 && colorSelectedArr.length === 0 && priceSelectedArr.length === 0) {
            props.set();
        }
        else {
            filterProducts();
        }
    }

    function filterProducts() {
        var visTrueNum = 0;
        props.products.forEach((product) => { // filter out what doesn't match
            product.items.forEach((item) => {
                if (item.visibility === true) {
                    if (props.type !== product.category && props.type !== "all") {
                        item.visibility = false;
                    }
                    else {
                        if (sizeSelectedArr.length > 0) {
                            sizeSelectedArr.forEach((sizeAmt) => {
                                if (item.sizes.includes(sizeAmt) || item.sizes.includes("all")) {
                                    matches = true;
                                }
                            });
                            if (matches !== true) {
                                item.visibility = false;
                            }
                            matches = false;
                        }
                        if (colorSelectedArr.length > 0) {
                            colorSelectedArr.forEach((colorAmt) => {
                                if (item.color.includes(colorAmt)) {
                                    matches = true;
                                }
                            });
                            if (matches !== true) {
                                item.visibility = false;
                            }
                            matches = false;
                        }
                        if (priceSelectedArr.length > 0) {
                            priceSelectedArr.forEach((priceAmt) => {
                                if (priceAmt === 1) {
                                    if (product.price < 50) {
                                        matches = true;
                                    }
                                }
                                else if (priceAmt === 2) {
                                    if (product.price > 50 && product.price < 100) {
                                        matches = true;
                                    }
                                }
                                else if (priceAmt === 3) {
                                    if (product.price >= 100) {
                                        matches = true;
                                    }
                                }
                            });
                            if (matches !== true) {
                                item.visibility = false
                            }
                            matches = false;
                        }
                    }
                    if (item.visibility === true){
                        visTrueNum++;
                    }
                }
            })
        });
        props.set();
        props.filterNum(Number(visTrueNum))
    }

    const ClickReset = () => {
        sizeSelectedArr.length = 0;
        colorSelectedArr.length = 0;
        priceSelectedArr.length = 0;
        checkboxHolders.forEach((checkbox) => {
            checkbox.checked = false;
        })
        checkboxHolders.length = 0;

        props.products.forEach((product) => {
            product.items.forEach((item) => {
                item.visibility = true;
            })
        });
        filterProducts()
    }

    const location = useLocation()

    useEffect(() => {
        ClickReset();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [location]);

    useEffect(() => {
        document.body.style.overflow = sidebarFilterActive ? "hidden" : "unset";
      }, [sidebarFilterActive]);
    
    const Width = () => {
        var width = window.innerWidth;
        if (width > 850){
            setSidebarFilterActive(false);
        }
    }
    window.addEventListener('resize', Width)
    

    return (
        <>
        <button className="filter-toggle-btn" onClick={() => setSidebarFilterActive(true)}><FontAwesomeIcon icon={faWandMagicSparkles} /></button>
        <div className='refiner-bg-closeout-btn' style={{ display: sidebarFilterActive ? "block" : "none" }} onClick={() => setSidebarFilterActive(false)}></div>
        <div className={sidebarFilterActive ? 'sidebar-refiner' : "refiner" }>
            <div className="refiner-container">
                <p className='refiner-header'><b>Refine</b></p>
                <div className="filter-type">
                    <div className="Size">
                        <p className='refiner-header'>Size</p>
                        <div className="input-row">
                            <input type="checkbox" id="s" name="s" onChange={AddRemoveClass("size", "s")} />
                            <label htmlFor="s"> S</label>
                        </div>
                        <div className="input-row">
                            <input type="checkbox" id="m" name="m" onChange={AddRemoveClass("size", "m")} />
                            <label htmlFor="m"> M</label>
                        </div>
                        <div className="input-row">
                            <input type="checkbox" id="l" name="l" onChange={AddRemoveClass("size", "l")} />
                            <label htmlFor="l"> L</label>
                        </div>
                        <div className="input-row">
                            <input type="checkbox" id="xl" name="xl" onChange={AddRemoveClass("size", "xl")} />
                            <label htmlFor="xl"> XL</label>
                        </div>
                    </div>
                </div>
                <div className="filter-type">
                    <div className="Color">
                        <p className='refiner-header'>Color</p>
                        {props.cfa.map((color, idx) => {
                            return <ColorFilterSlots key={idx} idx={idx} color={color} function={AddRemoveClass}/>
                        })}
                    </div>
                </div>
                <div className="filter-type">
                    <div className="Price">
                        <p className='refiner-header'>Price</p>
                        <div className="input-row">
                            <input type="checkbox" id="below-fifty" name="below-fifty" onChange={AddRemoveClass("price", 1)} />
                            <label htmlFor="below-fifty"> Below $50</label>
                        </div>
                        <div className="input-row">
                            <input type="checkbox" id="fifty-hundred" name="fifty-hundred" onChange={AddRemoveClass("price", 2)} />
                            <label htmlFor="fifty-hundred"> $50 - $100</label>
                        </div>
                        <div className="input-row">
                            <input type="checkbox" id="hundred-up" name="hundred-up" onChange={AddRemoveClass("price", 3)} />
                            <label htmlFor="hundred-up"> $100 and Up</label>
                        </div>
                    </div>
                </div>
                <button className="refiner-apply-btn" onClick={() => setSidebarFilterActive(false)}>See Changes</button>
                <button className="refiner-reset-btn" onClick={ClickReset}>Reset</button>
            </div>
        </div>
        </>

    )
}

export default Filter