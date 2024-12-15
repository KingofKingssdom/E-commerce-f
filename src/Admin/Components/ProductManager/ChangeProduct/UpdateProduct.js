import React, { useState } from "react";

function UpdateProduct({ product, onUpdate, onClose }) {
    const [updatedProduct, setUpdatedProduct] = useState({
        id: product.id,
        productName: product.productName,
        pricePrevious: product.pricePrevious,
        priceCurrent: product.priceCurrent,
        discountPrice: product.discountPrice,
        description: product.description,
        quantity: product.quantity,
        status: product.status,
    });

    const handleChange = (e) => {
        setUpdatedProduct({
            ...updatedProduct,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(updatedProduct);
    };

    return (
        <div>
            <h2>Cập nhật sản phẩm</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Tên sản phẩm:</label>
                    <input
                        type="text"
                        name="productName"
                        value={updatedProduct.productName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Giá trước:</label>
                    <input
                        type="number"
                        name="pricePrevious"
                        value={updatedProduct.pricePrevious}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Giá hiện tại:</label>
                    <input
                        type="number"
                        name="priceCurrent"
                        value={updatedProduct.priceCurrent}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Giảm giá:</label>
                    <input
                        type="text"
                        name="discountPrice"
                        value={updatedProduct.discountPrice}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Mô tả khuyến mãi:</label>
                    <textarea
                        name="description"
                        value={updatedProduct.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Số lượng hàng trong kho:</label>
                    <input
                        type="number"
                        name="quantity"
                        value={updatedProduct.quantity}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Trạng thái:</label>
                    <select
                        name="status"
                        value={updatedProduct.status}
                        onChange={handleChange}
                    >
                        <option value="Còn hàng">Còn hàng</option>
                        <option value="Hết hàng">Hết hàng</option>
                        <option value="Sắp về hàng">Sắp về hàng</option>
                    </select>
                </div>
                <button type="submit">Cập nhật</button>
                <button type="button" onClick={onClose}>
                    Hủy
                </button>
            </form>
        </div>
    );
}

export default UpdateProduct;