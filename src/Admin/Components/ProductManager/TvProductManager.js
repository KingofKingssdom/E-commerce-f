import React, { useState, useEffect } from 'react';
import ProductManager from "./ProductManager";
import UpdateProduct from "./ChangeProduct/UpdateProduct";

function TvProductManager() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isUpdating, setIsUpdating] = useState(false);
    const [productUpdating, setProductUpdating] = useState({});

    const categoryId = 7;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/product/category/${categoryId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [categoryId]);

    const handleUpdate = (product) => {
        setIsUpdating(true);
        setProductUpdating(product);
    };

    const onUpdate = async (updatedProduct) => {
        try {
            const response = await fetch(`http://localhost:8080/product/${updatedProduct.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProduct),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setProducts(
                products.map((product) => (product.id === data.id ? data : product))
            );
            setIsUpdating(false);
        } catch (error) {
            setError(error.message);
        }
    };

    const onClose = () => {
        setIsUpdating(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <div className="ctn-directProduct">
                <ProductManager />
            </div>
            <div className="container-productManager">
                <div className="tb-productManager">
                    <h2>Tivi</h2>
                    <div>
                        <table>
                            <thead>
                            <tr>
                                <th className="thProductManager-Id">ID</th>
                                <th className="thProductManager-image">Ảnh sản phẩm</th>
                                <th className="thProductManager-name">Tên sản phẩm</th>
                                <th className="thProductManager-price">Giá trước</th>
                                <th className="thProductManager-price">Giá hiện tại</th>
                                <th className="thProductManager-price">Giảm giá</th>
                                <th className="thProductManager-description">
                                    Mô tả khuyến mãi
                                </th>
                                <th className="thProductManager-number">
                                    Số lượng hàng trong kho
                                </th>
                                <th className="thProductManager-number">Trạng thái</th>
                                <th className="thProductManager-fix">Chỉnh sửa</th>
                            </tr>
                            </thead>
                            <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td className="thProductManager-Id">{product.id}</td>
                                    <td className="thProductManager-image">
                                        <img
                                            src={`data:image/jpeg;base64,${product.productImage}`}
                                            alt={product.productName}
                                            style={{ width: 100 }}
                                        />
                                    </td>
                                    <td>{product.productName}</td>
                                    <td className="thProductManager-price">
                                        {product.pricePrevious}
                                    </td>
                                    <td className="thProductManager-price">
                                        {product.priceCurrent}
                                    </td>
                                    <td className="thProductManager-price">
                                        {product.discountPrice}
                                    </td>
                                    <td>{product.description}</td>
                                    <td className="thProductManager-number">
                                        {product.quantity}
                                    </td>
                                    <td className="thProductManager-number">
                                        {product.status}
                                    </td>
                                    <td className="thProductManager-fix">
                                        <button onClick={() => handleUpdate(product)}>
                                            Cập nhật
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {isUpdating && (
                <UpdateProduct
                    product={productUpdating}
                    onUpdate={onUpdate}
                    onClose={onClose}
                />
            )}
        </div>
    );
}

export default TvProductManager;