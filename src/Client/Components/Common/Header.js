import React, { useState, useEffect } from "react";
import './Common.css'
import { FaSearch, FaList, FaPhoneAlt, FaTruck, FaCartPlus, FaRegUserCircle, FaHome } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Menu from "../HomePage/Menu/Menu";
import Register from "../Login/Register";
import Login from "../Login/Login";

function Header({ setShowCart, setCartItems, cartItems }) {
    const [show, setShow] = useState(false);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);


    const saveCartToLocalStorage = (cart) => {
        localStorage.setItem('cartItems', JSON.stringify(cart));
    };


    const loadCartFromLocalStorage = () => {
        const storedCart = localStorage.getItem('cartItems');
        if (storedCart) {
            try {
                const parsedCart = JSON.parse(storedCart);
                if (Array.isArray(parsedCart)) {
                    setCartItems(parsedCart);
                    const totalQuantity = parsedCart.reduce((total, item) => {
                        const quantity = Number(item.quantity);
                        return total + (isNaN(quantity) ? 0 : quantity);
                    }, 0);
                    setCartQuantity(totalQuantity);
                } else {
                    console.error('Dữ liệu giỏ hàng trong localStorage không hợp lệ:', parsedCart);
                    setCartItems([]);
                    setCartQuantity(0);
                }
            } catch (error) {
                console.error('Lỗi khi parse dữ liệu giỏ hàng từ localStorage:', error);
                setCartItems([]);
                setCartQuantity(0);
            }
        } else {

            fetchCartItems();
        }
    };

    const fetchCartItems = async () => {
        try {
            const response = await fetch('http://localhost:8080/cart/getAll');
            const data = await response.json();
            console.log("Fetched cart data:", data);
            if (Array.isArray(data)) {
                const totalQuantity = data.reduce((total, item) => {
                    const quantity = Number(item.quantity);
                    return total + (isNaN(quantity) ? 0 : quantity);
                }, 0);
                setCartQuantity(totalQuantity);
                setCartItems(data);
                saveCartToLocalStorage(data);
            } else {
                console.error('Data fetched is not an array:', data);
                setCartQuantity(0);
                setCartItems([]);
                saveCartToLocalStorage([]);
            }
        } catch (error) {
            console.error('Error fetching cart items:', error);
            setCartQuantity(0);
            setCartItems([]);
            saveCartToLocalStorage([]);
        }
    };

    useEffect(() => {
        loadCartFromLocalStorage();

    }, []);

    useEffect(() => {
        if (Array.isArray(cartItems) && cartItems.length > 0) {
            const totalQuantity = cartItems.reduce((total, item) => {
                const quantity = Number(item.quantity);
                return total + (isNaN(quantity) ? 0 : quantity);
            }, 0);
            setCartQuantity(totalQuantity);
        } else {
            setCartQuantity(0);
        }
        saveCartToLocalStorage(cartItems);
    }, [cartItems]);

    const onShowCartHandler = () => {
        setShowCart(true);
    };

    const onShowLoginHandler = () => {
        setShowLogin(true);
    };

    const onCloseLoginHandler = () => {
        setShowLogin(false);
        setShowRegister(false);
    };

    const onSwitchToRegisterHandler = () => {
        setShowLogin(false);
        setShowRegister(true);
    };

    const onSwitchToLoginHandler = () => {
        setShowRegister(false);
        setShowLogin(true);
    };
    return (
        <div>
            <header>
                <div className="navContainer">
                    <nav className="navbar">
                        <Link to="/" className="navbarLogo">
                            <img src="image/Logo.png" alt="Logo"/>
                        </Link>
                        <a onClick={() => setShow(!show)} href="#Danh-Muc" className="btnMenu">
                            <div className="boxIcon"><FaList/></div>
                            <div className="boxContent">Danh mục</div>
                        </a>
                        <div className="toggle">{show && <Menu/>}</div>
                        <div className="boxSearch">
                            <form>
                                <div className="group-input">
                                    <div className="input-group-btn">
                                        <button type="submit">
                                            <div><FaSearch/></div>
                                        </button>
                                    </div>
                                    <input type="text" placeholder="Bạn đang tìm gì?"/>
                                    <div>
                                        <button type="button"><IoCloseSharp/></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <Link to="/phoneOrder" className="contactHeader">
                            <div className="icon-contact"><FaPhoneAlt/></div>
                            <div className="content-contact">Gọi mua hàng 1800.2198</div>
                        </Link>
                        <Link to="/" className="searchOrder">
                            <div className="icon-searchOrder"><FaTruck/></div>
                            <div className="content-searchOrder">Tra cứu đơn hàng</div>
                        </Link>
                        <Link to="/cart" className="cart-container" onClick={onShowCartHandler}>
                            <div className="icon-cart"><FaCartPlus/></div>
                            <span className="cartamount"><sup>{cartQuantity}</sup></span>
                            <div className="content-cart">Giỏ hàng</div>
                        </Link>
                        <div className="login-btn"
                             onClick={onShowLoginHandler}>
                            <div className="icon-login"><FaRegUserCircle/></div>
                            <div className="content-login">Đăng nhập</div>
                        </div>
                    </nav>
                </div>
                {/* Box Đăng nhập */}
                {showLogin && (
                    <div className="login-modal">
                        <div className="login-content">
                            <span className="close-button" onClick={onCloseLoginHandler}>&times;</span>
                            <Login switchToRegister={onSwitchToRegisterHandler} onClose={onCloseLoginHandler}/>
                        </div>
                    </div>
                )}

                {/* Box Đăng ký */}
                {showRegister && (
                    <div className="register-modal">
                        <div className="register-content">
                            <span className="close-button" onClick={onCloseLoginHandler}>&times;</span>
                            <Register switchToLogin={onSwitchToLoginHandler} onClose={onCloseLoginHandler}/>
                        </div>
                    </div>
                )}
                {/* Dành cho Reponsive tablet và phone */}
                <div className='moblieTablet'>
                    <div className='container-mt'>
                        <div className='mt-container'>
                            <Link to="/">
                                <div className='icon-mt'><FaHome /></div>
                                <div>Trang chủ</div>
                            </Link>
                        </div>
                        <div className='mt-container'>
                            <a href='#A'>
                                <div className='icon-mt'><FaList /></div>
                                <div>Danh mục</div>
                            </a>
                        </div>
                        <div className='mt-container'>
                            <Link to='/cart' className='cart1'>
                                <div className='icon-mt'><FaCartPlus /></div>
                                <div>Giỏ hàng</div>
                            </Link>
                        </div>
                        <div className='mt-container'>
                            <Link to='/Order'>
                                <div className='icon-mt'><FaTruck /></div>
                                <div>Đơn hàng</div>
                            </Link>
                        </div>
                        <div className='mt-container'>
                            <a href='#A'>
                                <div className='icon-mt'><FaPhoneAlt /></div>
                                <div>Liên hệ</div>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;