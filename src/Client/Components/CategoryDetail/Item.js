import React from "react";
import { FaStar } from "react-icons/fa";
import {Link} from "react-router-dom";
function Item({ productId, image, title, priceCurrent, pricePrevious, discount, status, info, pay }){

    const formatPrice = (price) => {
        if (price && !isNaN(price)) {  // Kiểm tra xem price có tồn tại và là một số
            return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        }
        return '';
    };

    return(
        <div>
            <Link to={`/product/${productId}`} className="atiem">
                <div className="item">
                    <div className="imageItem">
                        <img src={image} alt="anhItem"/>
                    </div>
                    <div className="titleItem">
                        <p><b>{title}</b></p>
                    </div>
                    <div className="priceItem">
                        <h5>{formatPrice(priceCurrent)}</h5>
                        <h6>{formatPrice(pricePrevious)}</h6>
                    </div>
                    <div className="statusItem">
                        {status}
                    </div>
                    <div className="infoItem">
                        {info}
                    </div>
                    <div className="payItem">
                        {pay}
                    </div>
                    <div className="discountNumberItem">
                        {discount}
                    </div>
                    <div className="reviewer">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default Item;