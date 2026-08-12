import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    // Validate email
    if (!email) {
      setError('Vui lòng nhập email của bạn');
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Email không hợp lệ');
      setLoading(false);
      return;
    }

    try {
      // TODO: Thay thế bằng API call thực tế
      setTimeout(() => {
        console.log('Password reset request for:', email);
        setMessage('Kiểm tra email của bạn để đặt lại mật khẩu. Liên kết sẽ hết hạn trong 24 giờ.');
        setTimeout(() => {
          navigate('/');
        }, 3000);
      }, 1000);
    } catch (err) {
      setError('Đã xảy ra lỗi. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-facebook-gray flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="mb-6">
            <Link to="/" className="text-facebook-blue hover:underline text-sm font-medium">
              ← Quay lại đăng nhập
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-2">Quên mật khẩu?</h2>
          <p className="text-facebook-darkgray text-sm mb-6">
            Nhập email của bạn và chúng tôi sẽ gửi cho bạn một liên kết để đặt lại mật khẩu.
          </p>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Success Message */}
          {message && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-600 text-sm">{message}</p>
            </div>
          )}

          {/* Forgot Password Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-facebook-gray rounded-lg border border-gray-300 focus:outline-none focus:border-facebook-blue focus:bg-white transition"
              disabled={loading || !!message}
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !!message}
              className="w-full bg-facebook-blue hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Đang xử lý...' : 'Gửi liên kết đặt lại'}
            </button>
          </form>

          {/* Alternative Options */}
          <div className="mt-6 pt-6 border-t border-gray-300">
            <p className="text-facebook-darkgray text-sm text-center mb-4">
              Bạn chưa có tài khoản?
            </p>
            <button
              type="button"
              onClick={() => navigate('/signup')}
              className="w-full bg-facebook-blue hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
            >
              Tạo tài khoản mới
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
