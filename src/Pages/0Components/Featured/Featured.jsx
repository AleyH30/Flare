import React ,{useContext, useEffect, useState} from "react";
import './Featured.css';
import { StoreContext } from "../../../Context/StoreContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import FeaturedCard from "./0Components/FeaturedCard";

var scrollContainer;
var containerDimensions;
var containerWidth;

const Featured = (props) => {
    const { products } = useContext(StoreContext);

    const GetContainerWidth = () => {
        containerDimensions = scrollContainer.getBoundingClientRect();
        containerWidth = containerDimensions.width;
        console.log(containerWidth)
    }

    useEffect(() => {
        scrollContainer = document.querySelector(".featured-items-container");
        containerDimensions = scrollContainer.getBoundingClientRect();
        containerWidth = containerDimensions.width;

        var prevBtn = document.querySelector(".feat-prev-btn");
        var nextBtn = document.querySelector(".feat-next-btn");

        nextBtn.addEventListener("click", () => {
        scrollContainer.scrollLeft += containerWidth;})

        prevBtn.addEventListener("click", () => {
        scrollContainer.scrollLeft -= containerWidth;})

        window.addEventListener("resize", GetContainerWidth)
        return () => {
            window.removeEventListener("resize", GetContainerWidth)
            nextBtn.removeEventListener("click", () => {
                scrollContainer.scrollLeft += containerWidth;})
            nextBtn.removeEventListener("click", () => {
                scrollContainer.scrollLeft += containerWidth;})
        }

    }, [])
    

    return (
        <div className="featured-container">
            <h1>{props.header}</h1>
            <div className="featured-contents">
            <button className="feat-prev-btn"><FontAwesomeIcon icon={faChevronLeft} /></button>
            <div className="featured-items-container">
                {products.map((product, i) => {
                    return product.items.map((item, i) => {
                        if (item.tags.includes("featured")) {
                            return (
                                <FeaturedCard key={item.id} id={product.id} itemId={item.id} name={product.name} price={product.price} image={item.img[0]} />
                                )
                        }
                        else {
                            return null;
                        }
                    })
                })}
            </div>
            <button className="feat-next-btn"><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
        </div>
    )
}

export default Featured
