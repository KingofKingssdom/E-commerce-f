import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LaptopDetail from './Laptop/LaptopDetail';
import ImageProductDetail from "./ImageProductDetail";
import PhoneDetail from "./Phone/PhoneDetail";
import TvDetail from "./Tv/TvDetail";
import TabletDetail from "./Tablet/TabletDetail";
import SoundDetail from "./Sound/SoundDetail";
import ScreenDetail from "./Screen/ScreenDetail";
import WatchDetail from "./Watch/WatchDetail";
function ProductDetail({ setCartItems }) {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const productResponse = await fetch(`http://localhost:8080/product/${productId}`);
                if (!productResponse.ok) {
                    throw new Error(`HTTP error! status: ${productResponse.status}`);
                }
                const productData = await productResponse.json();
                setProduct(productData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [productId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Không tìm thấy sản phẩm.</div>;
    }

    const renderProductDetail = () => {
        switch (product.category.categoryName) {
            case 'Laptop':
                return <LaptopDetail productId={productId} />;
            case 'SmartPhone':
                return <PhoneDetail productId={productId} />;
            case 'Tablet':
                return <TabletDetail productId={productId} />;
            case 'Tivi':
                return <TvDetail productId={productId} />;
            case 'HeadPhone':
                return <SoundDetail productId={productId} />;
            case 'Screen':
                return <ScreenDetail productId={productId}/>;
            case 'Watch':
                return <WatchDetail productId={productId}/>;
            default:
                return <div>Không có thông tin chi tiết cho loại sản phẩm này.</div>;
        }
    };

    return (
        <div>
            <div className="container-productDetail">
                <div className="boxDetailProduct">
                    <div className="left-boxDetailProduct">
                        <ImageProductDetail setCartItems={setCartItems}/>
                    </div>
                    <div className="right-boxDetailProduct">
                        {renderProductDetail()}
                    </div>

                </div>
            </div>

        </div>
    );
}

export default ProductDetail;