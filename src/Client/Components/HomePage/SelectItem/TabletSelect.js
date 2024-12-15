import React from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/free-mode";
import { useEffect, useState } from 'react';
import Item from "./Item";
function TabletSelect(){
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
            <h4>MÁY TÍNH BẢNG</h4>
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
                            image="./image/tablet1.png"
                            title={products[75]?.productName || ''}
                            priceCurrent={products[75]?.priceCurrent || ''}
                            pricePrevious={products[75]?.pricePrevious || ''}
                            discount={products[75]?.discountPrice}
                            status={products[75]?.status}
                            info = {products[75]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/Tablet2.png"
                            title={products[76]?.productName || ''}
                            priceCurrent={products[76]?.priceCurrent || ''}
                            pricePrevious={products[76]?.pricePrevious || ''}
                            discount={products[76]?.discountPrice}
                            status={products[76]?.status}
                            info = {products[76]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/Tablet3.png"
                            title={products[77]?.productName || ''}
                            priceCurrent={products[77]?.priceCurrent || ''}
                            pricePrevious={products[77]?.pricePrevious || ''}
                            discount={products[77]?.discountPrice}
                            status={products[77]?.status}
                            info = {products[77]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/Tablet4.png"
                            title={products[78]?.productName || ''}
                            priceCurrent={products[78]?.priceCurrent || ''}
                            pricePrevious={products[78]?.pricePrevious || ''}
                            discount={products[78]?.discountPrice}
                            status={products[78]?.status}
                            info = {products[78]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/Tablet5.png"
                            title={products[79]?.productName || ''}
                            priceCurrent={products[79]?.priceCurrent || ''}
                            pricePrevious={products[79]?.pricePrevious || ''}
                            discount={products[79]?.discountPrice}
                            status={products[79]?.status}
                            info = {products[79]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/Tablet6.png"
                            title={products[80]?.productName || ''}
                            priceCurrent={products[80]?.priceCurrent || ''}
                            pricePrevious={products[80]?.pricePrevious || ''}
                            discount={products[80]?.discountPrice}
                            status={products[80]?.status}
                            info = {products[80]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/Tablet7.png"
                            title={products[81]?.productName || ''}
                            priceCurrent={products[81]?.priceCurrent || ''}
                            pricePrevious={products[81]?.pricePrevious || ''}
                            discount={products[81]?.discountPrice}
                            status={products[81]?.status}
                            info = {products[81]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/Tablet8.png"
                            title={products[82]?.productName || ''}
                            priceCurrent={products[82]?.priceCurrent || ''}
                            pricePrevious={products[82]?.pricePrevious || ''}
                            discount={products[82]?.discountPrice}
                            status={products[82]?.status}
                            info = {products[82]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
export default TabletSelect;