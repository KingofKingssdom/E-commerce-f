import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from "../Admin";
import ProductManager from "../ProductManager/ProductManager";
import Navbar from "../Navbar";
import '../CommonAdmin.css'
import SmartPhoneProductManager from "../ProductManager/SmartPhoneProductManager";
import TabletProductManager from "../ProductManager/TabletProductManager";
import WatchProductManager from "../ProductManager/WatchProductManager";
import SoundProductManager from "../ProductManager/SoundProductManager";
import LaptopProductManager from "../ProductManager/LaptopProductManager";
import ScreenProductManager from "../ProductManager/ScreenProductManager";
import TvProductManager from "../ProductManager/TvProductManager";
function RouterAdmin() {
    return(
        <div>

            <Router>
                <div className="ctn-admin">
                    <div className="ctn-nav">
                        <Navbar/>
                    </div>
                    <div className="ctn-router">
                        <div className="content-router">
                            <Routes>
                                <Route path="/admin" element={<Admin/>}/>
                                <Route path="/admin/productManager" element={<ProductManager />} />
                                <Route path="/admin/productManager/smartPhone" element={<SmartPhoneProductManager/>}/>
                                <Route path="/admin/productManager/tablet" element={<TabletProductManager/>}/>
                                <Route path="/admin/productManager/watch" element={<WatchProductManager/>}/>
                                <Route path="/admin/productManager/sound" element={<SoundProductManager/>}/>
                                <Route path="/admin/productManager/laptop" element={<LaptopProductManager/>}/>
                                <Route path="/admin/productManager/screen" element={<ScreenProductManager/>}/>
                                <Route path="/admin/productManager/tv" element={<TvProductManager/>}/>
                            </Routes>
                        </div>

                    </div>
                </div>

            </Router>
        </div>
    )
}
export default RouterAdmin;