import React from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/free-mode";
import { useEffect, useState } from 'react';
import Item from "./Item";
function DesktopSelect(){
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
            <h4>MÀN HÌNH, MÁY TÍNH ĐỂ BÀN</h4>
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
                            image="./image/manHinhDell1.png"
                            title={products[86]?.productName || ''}
                            priceCurrent={products[86]?.priceCurrent || ''}
                            pricePrevious={products[86]?.pricePrevious || ''}
                            discount={products[86]?.discountPrice}
                            status={products[86]?.status}
                            info = {products[86]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/manHinhEDra.png"
                            title={products[87]?.productName || ''}
                            priceCurrent={products[87]?.priceCurrent || ''}
                            pricePrevious={products[87]?.pricePrevious || ''}
                            discount={products[87]?.discountPrice}
                            status={products[87]?.status}
                            info = {products[87]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/manHinhLG1.png"
                            title={products[90]?.productName || ''}
                            priceCurrent={products[90]?.priceCurrent || ''}
                            pricePrevious={products[90]?.pricePrevious || ''}
                            discount={products[90]?.discountPrice}
                            status={products[90]?.status}
                            info = {products[90]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/manHinhLG2.png"
                            title={products[91]?.productName || ''}
                            priceCurrent={products[91]?.priceCurrent || ''}
                            pricePrevious={products[91]?.pricePrevious || ''}
                            discount={products[91]?.discountPrice}
                            status={products[91]?.status}
                            info = {products[91]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/ManHinhMSI.png"
                            title={products[92]?.productName || ''}
                            priceCurrent={products[92]?.priceCurrent || ''}
                            pricePrevious={products[92]?.pricePrevious || ''}
                            discount={products[92]?.discountPrice}
                            status={products[92]?.status}
                            info = {products[92]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/ManHinhMSI2.png"
                            title={products[93]?.productName || ''}
                            priceCurrent={products[93]?.priceCurrent || ''}
                            pricePrevious={products[93]?.pricePrevious || ''}
                            discount={products[93]?.discountPrice}
                            status={products[93]?.status}
                            info = {products[93]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/ManHinhXiaomi1.png"
                            title={products[88]?.productName || ''}
                            priceCurrent={products[88]?.priceCurrent || ''}
                            pricePrevious={products[88]?.pricePrevious || ''}
                            discount={products[88]?.discountPrice}
                            status={products[88]?.status}
                            info = {products[88]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Item
                            image="./image/ManHinhDell1.png"
                            title={products[89]?.productName || ''}
                            priceCurrent={products[89]?.priceCurrent || ''}
                            pricePrevious={products[89]?.pricePrevious || ''}
                            discount={products[89]?.discountPrice}
                            status={products[89]?.status}
                            info = {products[89]?.description}
                            pay="Trả góp 0%"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
export default DesktopSelect;