import React from "react";
import { FaStar } from "react-icons/fa";
function Item(props){
    const formatPrice = (price) => {
        if (price && !isNaN(price)) {
            return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        }
        return '';
    };

    return(
        <div>
            <a href="#a" className="atiem">
                <div className="item">
                    <div className="imageItem">
                        <img src={props.image} alt="anhItem"/>
                    </div>
                    <div className="titleItem">
                        <p><b>{props.title}</b></p>
                    </div>
                    <div className="priceItem">
                        <h5>{formatPrice(props.priceCurrent)}</h5>
                        <h6>{formatPrice(props.pricePrevious)}</h6>
                    </div>
                    <div className="statusItem">
                        {props.status}
                    </div>
                    <div className="infoItem">
                        {props.info}
                    </div>
                    <div className="payItem">
                        {props.pay}
                    </div>
                    <div className="discountNumberItem">
                        {props.discount}
                    </div>
                    <div className="reviewer">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
            </a>
        </div>
    )
}
export default Item;