import React, { useState, useEffect } from 'react';
import "./CarPage.css";

function CartPage() {
    const [carts, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    useEffect(() => {
        fetch('http://localhost:8080/cart/getAll')
            .then(response => response.json())
            .then(data => {
                const updatedData = data.map(cart => ({
                    ...cart,
                    quantity: cart.quantity && cart.quantity >= 1 ? cart.quantity : 1
                }));
                setCart(updatedData);
                calculateTotalPrice(updatedData);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleQuantityChange = (id, quantity) => {
        const updatedQuantity = quantity < 1 ? 1 : quantity;

        const newCarts = carts.map(cart => {
            if (cart.id === id) {
                return { ...cart, quantity: updatedQuantity };
            }
            return cart;
        });
        setCart(newCarts);
        calculateTotalPrice(newCarts);
    };

    const handleRemove = (id) => {
        fetch(`http://localhost:8080/cart/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                const newCarts = carts.filter(cart => cart.id !== id);
                setCart(newCarts);
                calculateTotalPrice(newCarts);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const calculateTotalPrice = (carts) => {
        const totalPrice = carts.reduce((total, cart) => total + cart.priceCurrent * cart.quantity, 0);
        setTotalPrice(totalPrice);
    };

    return (
        <div>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th className="th-cart">Ảnh sản phẩm</th>
                        <th className="th-cart">Tên sản phẩm</th>
                        <th className="th-cart-price">Giá</th>
                        <th className="th-cart-number">Số lượng</th>
                        <th className="th-cart">Thành tiền</th>
                        <th className="th-cart">Thao tác</th>
                    </tr>
                    </thead>
                    <tbody>
                    {carts.map((cart, index) => (
                        <tr key={index}>
                            <td><img src={`data:image/png;base64,${cart.productImage}`}
                                     alt={cart.productName} style={{width: 100}}/></td>
                            <td className="title">{cart.productName}</td>
                            <td>{formatter.format(cart.priceCurrent)}</td>
                            <td>
                                <input className="number"
                                       type="number"
                                       min="1"
                                       value={cart.quantity}
                                       onChange={(e) => handleQuantityChange(cart.id, parseInt(e.target.value))}
                                />
                            </td>
                            <td>{formatter.format(cart.priceCurrent * cart.quantity)}</td>
                            <td>
                                <button onClick={() => handleRemove(cart.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <p className="total">Tổng tiền: {formatter.format(totalPrice)}</p>
            </div>
        </div>
    );
}

export default CartPage;