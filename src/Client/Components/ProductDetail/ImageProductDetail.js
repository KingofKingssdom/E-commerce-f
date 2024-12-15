import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ImageProductDetail({ setCartItems }) {
    const { productId } = useParams();
    const [productImage, setProductImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        const fetchProductImage = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:8080/product/productImage/${productId}`);

                if (!response.ok) {
                    if (response.status === 404) {
                        setProductImage(null);
                    } else {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                }
                const imageBlob = await response.blob();
                const imageURL = URL.createObjectURL(imageBlob);
                setProductImage(imageURL);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        if(productId) fetchProductImage();
    }, [productId]);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:8080/product/${productId}`);

                if (!response.ok) {
                    if (response.status === 404) {
                        setProductDetails(null);
                    } else {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                }
                const product = await response.json();
                setProductDetails(product);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        if(productId) fetchProductDetails();
    }, [productId]);

    const handleAddToCart = async () => {
        try {
            const response = await fetch("http://localhost:8080/cart/addCart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    productId: productId,
                    productName: productDetails?.productName,
                    priceCurrent: productDetails?.priceCurrent,
                    productImage: productDetails?.productImage,
                    quantity: 1
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }


            const storedCart = localStorage.getItem('cartItems');
            let updatedCart = [];
            if (storedCart) {
                try {
                    updatedCart = JSON.parse(storedCart);
                    const existingItemIndex = updatedCart.findIndex(item => item.productId === productId);
                    if (existingItemIndex > -1) {
                        updatedCart[existingItemIndex].quantity += 1;
                    } else {
                        updatedCart.push({
                            productId: productId,
                            quantity: 1,
                            productName: productDetails?.productName,
                            priceCurrent: productDetails?.priceCurrent,
                            productImage: productDetails?.productImage
                        });
                    }
                } catch (error) {
                    console.error('Lỗi khi parse cart từ localStorage:', error);
                    updatedCart = [{
                        productId: productId,
                        quantity: 1,
                        productName: productDetails?.productName,
                        priceCurrent: productDetails?.priceCurrent,
                        productImage: productDetails?.productImage
                    }];
                }
            } else {
                updatedCart = [{
                    productId: productId,
                    quantity: 1,
                    productName: productDetails?.productName,
                    priceCurrent: productDetails?.priceCurrent,
                    productImage: productDetails?.productImage
                }];
            }


            localStorage.setItem('cartItems', JSON.stringify(updatedCart));


            setCartItems(updatedCart);


            setIsAddedToCart(true);

        } catch (error) {
            setError(error.message);
        }
    };

    if (loading) {
        return <div>Đang tải...</div>;
    }

    if (error) {
        return <div>Lỗi: {error}</div>;
    }

    if (!productImage) {
        return <div>Không tìm thấy ảnh.</div>;
    }

    return (
        <div>
            <div className="image-container">
                <img src={productImage} alt={`Ảnh sản phẩm ${productId}`} />
            </div>
            <div className="container-order">
                <div className="btn-buy">MUA NGAY</div>
                <button onClick={handleAddToCart} disabled={isAddedToCart}>
                    {isAddedToCart ? (
                        <span className="datontai">
                            Sản phẩm đã thêm vào giỏ hàng
                        </span>
                    ) : (
                        "Thêm vào giỏ hàng"
                    )}
                </button>
            </div>
        </div>
    );
}

export default ImageProductDetail;