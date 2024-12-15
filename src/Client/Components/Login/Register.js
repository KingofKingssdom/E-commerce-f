import React, { useState } from 'react';

const Register = ({ switchToLogin, onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, email }),
            });
            if (response.status === 201) {
                console.log('Đăng ký thành công');
                onClose(); // Đóng modal sau khi đăng ký thành công

            } else {
                console.error('Đăng ký thất bại');

            }
        } catch (error) {
            console.error('Lỗi khi đăng ký:', error);
        }
    };

    return (
        <div>
            <h2>Đăng ký</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Tên đăng nhập:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div>
                    <label>Mật khẩu:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <button type="submit">Đăng ký</button>
            </form>
            <p>Đã có tài khoản? <button type="button" onClick={switchToLogin}>Đăng nhập</button></p>
        </div>
    );
};

export default Register;