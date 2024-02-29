import React from "react";
import './Intro.css';
import hp3 from '../../../../Components/Assets/Images/headerphoto3.jpg';
import hp2 from '../../../../Components/Assets/Images/headerphoto2.jpg';
import hp1 from '../../../../Components/Assets/Images/headerphoto1.jpg';
import { Link } from "react-router-dom";


const Intro = () => {
    return (
        <div className="intro-container">
            <div className="intro-contents">
                <Link to={"/new"}><button className="intro-shopnow-btn">Shop Now</button></Link>
                <div className="intro-left-container">
                    <div className="img1-container">
                        <img className="img1" src={hp3} alt=""/>
                    </div>
                </div>
                <div className="intro-right-container">
                    <div className="img2-container">
                        <img className="img2" src={hp1} alt=""/>
                    </div>
                    <div className="img2-container">
                        <img className="img2" src={hp2} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro