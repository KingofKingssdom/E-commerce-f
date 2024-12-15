import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
function ProductManager() {
    return (
        <div>
            <div className="direct-productManager">
                <Link to="/admin/productManager/smartPhone">
                    SmartPhone
                </Link>
                <Link to="/admin/productManager/tablet">
                    Tablet
                </Link>
                <Link to="/admin/productManager/sound">
                    Sound
                </Link>
                <Link to="/admin/productManager/laptop">
                    Laptop
                </Link>
                <Link to="/admin/productManager/screen">
                    Screen
                </Link>
                <Link to="/admin/productManager/tv">
                    Tivi
                </Link>
                <Link to="/admin/productManager/watch">
                    Watch
                </Link>
            </div>


        </div>
    );
}

export default ProductManager;