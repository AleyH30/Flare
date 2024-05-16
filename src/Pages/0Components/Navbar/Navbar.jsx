import React, {useContext, useState, useEffect} from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { StoreContext } from "../../../Context/StoreContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faClipboard } from '@fortawesome/free-regular-svg-icons'

const Navbar = () => {
    const {getTotalCartItems} = useContext(StoreContext);
    const [sidebarActive, setSidebarActive] = useState(false);

    const Width = () => {
        var width = window.innerWidth;
        if (width > 800){
            setSidebarActive(false);
        }
      }
    window.addEventListener('resize', Width)

    useEffect(() => {
        document.body.style.overflow = sidebarActive ? "hidden" : "unset";
      }, [sidebarActive]);

    return (
        <>
            <div className="navigation">
                <div className="nav-container">
                    <Link to='/' className="logo-btn">Flare</Link>
                    <div className="nav-links">
                        <ul>
                            <li><Link to='/new'>New</Link></li>
                            <li><Link to='/hoodies'>Hoodies</Link></li>
                            <li><Link to='/tees'>Tees</Link></li>
                        </ul>
                    </div>
                    <div className="right-links">
                        <ul>
                            {localStorage.getItem('auth-token')?
                            <li className="logout-btn"  /*onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}*/>Log Out</li>:
                            <li><Link to='/login' className="login-btn">Log In</Link></li>}
                            <li>
                                <div className="cart-link-package">
                                    <Link to='/cart' className="cart-btn"><FontAwesomeIcon icon={faClipboard} /></Link>
                                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <button className="sidebar-toggle-btn" onClick={() => setSidebarActive(!sidebarActive)}><FontAwesomeIcon icon={faBars} /></button>

                </div>
            </div>
            <div className="sidebar-bg-closeout-btn" style={{ display: sidebarActive ? "block" : "none" }} onClick={() => setSidebarActive(false)}></div>
            <div className="sidebar-nav" style={{ display: sidebarActive ? "flex" : "none" }}>
                <button className="sidebar-x-closeout-btn" onClick={() => setSidebarActive(!sidebarActive)}><FontAwesomeIcon icon={faXmark} /></button>
                <ul className="sidebar-nav-links">
                    <li onClick={() => setSidebarActive(false)}><Link to='/'>Home</Link></li>
                    <li onClick={() => setSidebarActive(false)}><Link to='/new'>New</Link></li>
                    <li onClick={() => setSidebarActive(false)}><Link to='/hoodies'>Hoodies</Link></li>
                    <li onClick={() => setSidebarActive(false)}><Link to='/tees'>Tees</Link></li>
                    <li onClick={() => setSidebarActive(false)}><Link to='/login'>Log In</Link></li>
                    <li onClick={() => setSidebarActive(false)}>
                        <Link to='/cart' >
                            <div className="cart-link-package">
                                Cart
                                <div className="nav-cart-count">{getTotalCartItems()}</div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar