import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Home from "../HomePage/Home";
import PhoneCategory from "../CategoryDetail/Phone/PhoneCategory";
import TabletCategory from "../CategoryDetail/Tablet/TabletCategory";
import LaptopCategory from "../CategoryDetail/Laptop/LaptopCategory";
import SoundCategory from "../CategoryDetail/Sound/SoundCategory";
import ScreenCategory from "../CategoryDetail/Screen/ScreenCategory";
import WatchCategory from "../CategoryDetail/Watch/WatchCategory";
import TvCategory from "../CategoryDetail/Tv/TvCategory";
import ProductDetail from "../ProductDetail/ProductDetail";
import CartPage from "../Cart/CartPage";

function AppRouter(){
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);
    return(
        <div>
            <Router>
                <Header setShowCart={setShowCart} cartItems={cartItems} setCartItems={setCartItems}/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/phoneCategory" element={<PhoneCategory/>}/>
                    <Route path="/tabletCategory" element={<TabletCategory/>}/>
                    <Route path="/laptopCategory" element={<LaptopCategory/>}/>
                    <Route path="/soundCategory" element={<SoundCategory/>}/>
                    <Route path="/screenCategory" element={<ScreenCategory/>}/>
                    <Route path="/watchCategory" element={<WatchCategory/>}/>
                    <Route path="/tvCategory" element={<TvCategory/>}/>
                    <Route path="/product/:productId" element={< ProductDetail setCartItems={setCartItems}/>} exact/>
                    <Route path="/cart" element={<CartPage/>}/>
                </Routes>
                {showCart &&  <CartPage setShowCart={setShowCart}/>}
                < Footer/>
            </Router>
        </div>
    )
}
export default AppRouter;