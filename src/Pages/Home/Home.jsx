import React, {useEffect} from "react";
import Intro from "./0Components/Intro/Intro";
import Featured from "../0Components/Featured/Featured";
import './Home.css';

const Home = () => {
  
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

    return (
        <div className="home-page">
          <Intro/>
          <Featured header={"Featured"}/>
        
        </div>
    )
}

export default Home