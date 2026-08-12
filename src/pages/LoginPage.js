import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate inputs
    if (!email || !password) {
      setError('Vui lòng nhập email và mật khẩu');
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Email không hợp lệ');
      setLoading(false);
      return;
    }

    try {
      // TODO: Thay thế bằng API call thực tế
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password })
      // });
      
      // Simulate API call
      setTimeout(() => {
        console.log('Login attempt:', { email, password });
        // Giả lập đăng nhập thành công
        localStorage.setItem('user', JSON.stringify({ email }));
        navigate('/dashboard');
      }, 1000);
    } catch (err) {
      setError('Đăng nhập thất bại. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-facebook-gray flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-facebook-blue mb-2">fb4</h1>
            <p className="text-facebook-darkgray text-sm">Quản lý khách hàng</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Số điện thoại hoặc email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-facebook-gray rounded-lg border border-gray-300 focus:outline-none focus:border-facebook-blue focus:bg-white transition"
                disabled={loading}
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-facebook-gray rounded-lg border border-gray-300 focus:outline-none focus:border-facebook-blue focus:bg-white transition"
                disabled={loading}
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-facebook-blue hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">hoặc</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Forgot Password Link */}
          <div className="text-center mb-6">
            <Link
              to="/forgot-password"
              className="text-facebook-blue hover:underline text-sm font-medium"
            >
              Quên mật khẩu?
            </Link>
          </div>

          {/* Signup Button */}
          <button
            type="button"
            onClick={() => navigate('/signup')}
            className="w-full bg-facebook-blue hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
          >
            Tạo tài khoản mới
          </button>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-300 text-center">
            <p className="text-facebook-darkgray text-xs">
              © 2024 FB4 - Quản lý khách hàng
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
