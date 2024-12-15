import React from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/free-mode";
import { useEffect, useState } from 'react';
import Item from "./Item";
function PhoneSelect () {
   const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8080/product/getAll');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                setProducts(data);
            } catch (error) {
                console.error('Error fetching brands:', error);
            }
        };

        fetchProducts();
    }, []);
    return(
        <div>
            <h4>ĐIỆN THOẠI NỔI BẬT NHẤT</h4>
            <div className="swriper-wrapper">
                <Swiper
                    freeMode={true}
                    grabCursor={true}
                    modules={[FreeMode]}
                    touchRatio={0.2}
                    breakpoints={{
                        1024: {
                            slidesPerView:5,
                            spaceBetween:0
                        },
                        768:{
                            slidesPerView:3,
                            spaceBetween:0
                        },
                        375:{
                            slidesPerView:2,
                            spaceBetween:0
                        }

                    }}
                >
                    <SwiperSlide>
                        <Item
                            image="./image/iphone16.png"
                            title={products[0]?.productName || ''}
                            priceCurrent={products[0]?.priceCurrent || ''}
                            pricePrevious={products[0]?.pricePrevious || ''}
                            discount={products[0]?.discountPrice}
                            status={products[0]?.status}
                            info = {products[0]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/galaxys24.png"
                            title={products[1]?.productName || ''}
                            priceCurrent={products[1]?.priceCurrent || ''}
                            pricePrevious={products[1]?.pricePrevious || ''}
                            discount={products[1]?.discountPrice}
                            status={products[1]?.status}
                            info = {products[1]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/Samsung.png"
                            title={products[2]?.productName || ''}
                            priceCurrent={products[2]?.priceCurrent || ''}
                            pricePrevious={products[2]?.pricePrevious || ''}
                            discount={products[2]?.discountPrice}
                            status={products[2]?.status}
                            info = {products[2]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/galaxym55.png"
                            title={products[4]?.productName || ''}
                            priceCurrent={products[4]?.priceCurrent || ''}
                            pricePrevious={products[4]?.pricePrevious || ''}
                            discount={products[4]?.discountPrice}
                            status={products[4]?.status}
                            info = {products[4]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/galaxyAi.png"
                            title={products[5]?.productName || ''}
                            priceCurrent={products[5]?.priceCurrent || ''}
                            pricePrevious={products[5]?.pricePrevious || ''}
                            discount={products[5]?.discountPrice}
                            status={products[5]?.status}
                            info = {products[5]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/iphone13.png"
                            title={products[7]?.productName || ''}
                            priceCurrent={products[7]?.priceCurrent || ''}
                            pricePrevious={products[7]?.pricePrevious || ''}
                            discount={products[7]?.discountPrice}
                            status={products[7]?.status}
                            info = {products[7]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/xiaomi14t.png"
                            title={products[17]?.productName || ''}
                            priceCurrent={products[17]?.priceCurrent || ''}
                            pricePrevious={products[17]?.pricePrevious || ''}
                            discount={products[17]?.discountPrice}
                            status={products[17]?.status}
                            info = {products[17]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/iphone15.png"
                            title={products[8]?.productName || ''}
                            priceCurrent={products[8]?.priceCurrent || ''}
                            pricePrevious={products[8]?.pricePrevious || ''}
                            discount={products[8]?.discountPrice}
                            status={products[8]?.status}
                            info = {products[8]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
export default PhoneSelect;