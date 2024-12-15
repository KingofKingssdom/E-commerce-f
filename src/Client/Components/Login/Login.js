import React, { useState } from 'react';
import "./login.css"
const Login = ({ switchToRegister, onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded', // Đảm bảo content type này
                },
                body: `username=${username}&password=${password}`,
            });
            if (response.ok) {
                console.log('Đăng nhập thành công');
                onClose(); // Đóng modal sau khi đăng nhập thành công
                // Thực hiện các hành động sau khi đăng nhập thành công
            } else {
                console.error('Đăng nhập thất bại');
                // Hiển thị thông báo lỗi
            }
        } catch (error) {
            console.error('Lỗi khi đăng nhập:', error);
        }
    };

    return (
        <div>
            <h2>Đăng nhập</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Tên đăng nhập:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Mật khẩu:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Đăng nhập</button>
            </form>
            <p>Chưa có tài khoản? <button type="button" onClick={switchToRegister}>Đăng ký</button></p>
        </div>
    );
};

export default Login;