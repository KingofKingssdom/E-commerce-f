import React from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/free-mode";
import { useEffect, useState } from 'react';
import Item from "./Item";
function SoundSelect(){
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
            <h4>ÂM THANH</h4>
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
                            image="./image/earPhone7.png"
                            title={products[65]?.productName || ''}
                            priceCurrent={products[65]?.priceCurrent || ''}
                            pricePrevious={products[65]?.pricePrevious || ''}
                            discount={products[65]?.discountPrice}
                            status={products[65]?.status}
                            info = {products[65]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/earPhone1.png"
                            title={products[66]?.productName || ''}
                            priceCurrent={products[66]?.priceCurrent || ''}
                            pricePrevious={products[66]?.pricePrevious || ''}
                            discount={products[66]?.discountPrice}
                            status={products[66]?.status}
                            info = {products[66]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/earPhone2.png"
                            title={products[67]?.productName || ''}
                            priceCurrent={products[67]?.priceCurrent || ''}
                            pricePrevious={products[67]?.pricePrevious || ''}
                            discount={products[67]?.discountPrice}
                            status={products[67]?.status}
                            info = {products[67]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/earPhone3.png"
                            title={products[68]?.productName || ''}
                            priceCurrent={products[68]?.priceCurrent || ''}
                            pricePrevious={products[68]?.pricePrevious || ''}
                            discount={products[68]?.discountPrice}
                            status={products[68]?.status}
                            info = {products[68]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/headPhone1.png"
                            title={products[69]?.productName || ''}
                            priceCurrent={products[69]?.priceCurrent || ''}
                            pricePrevious={products[69]?.pricePrevious || ''}
                            discount={products[69]?.discountPrice}
                            status={products[69]?.status}
                            info = {products[69]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/earPhone7.png"
                            title={products[70]?.productName || ''}
                            priceCurrent={products[70]?.priceCurrent || ''}
                            pricePrevious={products[70]?.pricePrevious || ''}
                            discount={products[70]?.discountPrice}
                            status={products[70]?.status}
                            info = {products[70]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/earPhone6.png"
                            title={products[71]?.productName || ''}
                            priceCurrent={products[71]?.priceCurrent || ''}
                            pricePrevious={products[71]?.pricePrevious || ''}
                            discount={products[71]?.discountPrice}
                            status={products[71]?.status}
                            info = {products[71]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/headPhone2.png"
                            title={products[72]?.productName || ''}
                            priceCurrent={products[72]?.priceCurrent || ''}
                            pricePrevious={products[72]?.pricePrevious || ''}
                            discount={products[72]?.discountPrice}
                            status={products[72]?.status}
                            info = {products[72]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
export default SoundSelect;