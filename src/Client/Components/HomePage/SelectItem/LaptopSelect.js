import React from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/free-mode";
import { useEffect, useState } from 'react';
import Item from "./Item";
function LaptopSelect () {
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
            <h4>LAPTOP</h4>
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
                            image="./image/LaptopAppleM4.png"
                            title={products[24]?.productName || ''}
                            priceCurrent={products[24]?.priceCurrent || ''}
                            pricePrevious={products[24]?.pricePrevious || ''}
                            discount={products[24]?.discountPrice}
                            status={products[24]?.status}
                            info = {products[24]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/LaptopAppleM4N.png"
                            title={products[25]?.productName || ''}
                            priceCurrent={products[25]?.priceCurrent || ''}
                            pricePrevious={products[25]?.pricePrevious || ''}
                            discount={products[25]?.discountPrice}
                            status={products[25]?.status}
                            info = {products[25]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/LaptopAppleM2.png"
                            title={products[26]?.productName || ''}
                            priceCurrent={products[26]?.priceCurrent || ''}
                            pricePrevious={products[26]?.pricePrevious || ''}
                            discount={products[26]?.discountPrice}
                            status={products[26]?.status}
                            info = {products[26]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/LaptopAdero.png"
                            title={products[27]?.productName || ''}
                            priceCurrent={products[27]?.priceCurrent || ''}
                            pricePrevious={products[27]?.pricePrevious || ''}
                            discount={products[27]?.discountPrice}
                            status={products[27]?.status}
                            info = {products[27]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/LaptopVivobook1.png"
                            title={products[28]?.productName || ''}
                            priceCurrent={products[28]?.priceCurrent || ''}
                            pricePrevious={products[28]?.pricePrevious || ''}
                            discount={products[28]?.discountPrice}
                            status={products[28]?.status}
                            info = {products[28]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/LaptopAcer1.png"
                            title={products[29]?.productName || ''}
                            priceCurrent={products[29]?.priceCurrent || ''}
                            pricePrevious={products[29]?.pricePrevious || ''}
                            discount={products[29]?.discountPrice}
                            status={products[29]?.status}
                            info = {products[29]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/LaptopAppleM2.png"
                            title={products[30]?.productName || ''}
                            priceCurrent={products[30]?.priceCurrent || ''}
                            pricePrevious={products[30]?.pricePrevious || ''}
                            discount={products[30]?.discountPrice}
                            status={products[30]?.status}
                            info = {products[30]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/LaptopGaming1.png"
                            title={products[31]?.productName || ''}
                            priceCurrent={products[31]?.priceCurrent || ''}
                            pricePrevious={products[31]?.pricePrevious || ''}
                            discount={products[31]?.discountPrice}
                            status={products[31]?.status}
                            info = {products[31]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
export default LaptopSelect;