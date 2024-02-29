import React from "react";
import './App.css'
import {HashRouter, BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./Pages/0Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category/Category";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import LoginSignup from "./Pages/LoginSignup/LoginSignup";
import Cart from "./Pages/Cart/Cart";
import NotFound from "./NotFound/NotFound";

const App = () => {
    return (
        <div>
            <HashRouter>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/new' element={<Category category=""/>}/>
                    <Route path='/hoodies' element={<Category category="hoodie"/>}/>
                    <Route path='/tees' element={<Category category="tee"/>}/>
                    <Route path='/products' element={<SingleProduct/>}>
                        <Route path=':ProductId' element={<SingleProduct/>}>
                            <Route path=':ItemId' element={<SingleProduct/>}/>
                        </Route>
                    </Route>
                    <Route path='/login' element={<LoginSignup/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </HashRouter>
        </div>
    )
}

export default App;