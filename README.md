# FB4 - Hệ Thống Quản Lý Khách Hàng

Một ứng dụng web hiện đại để quản lý khách hàng với giao diện được lấy cảm hứng từ Facebook.

## 🎯 Tính năng

- ✅ Trang đăng nhập với xác thực
- ✅ Tạo tài khoản mới
- ✅ Quên mật khẩu / Đặt lại mật khẩu
- ✅ Giao diện responsive (mobile-friendly)
- ✅ Validation form đầy đủ
- ✅ Thiết kế hiện đại với Tailwind CSS

## 🛠️ Công nghệ sử dụng

- **Frontend**: React 18, Tailwind CSS, React Router
- **Build Tool**: Create React App (react-scripts)
- **Styling**: Tailwind CSS 3.3
- **Package Manager**: npm

## 📦 Installation

### Yêu cầu
- Node.js 14+ 
- npm 6+

### Cài đặt

1. Clone repository:
```bash
git clone https://github.com/nuakieplenhdenh123/fb4.git
cd fb4
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy development server:
```bash
npm start
```

4. Mở browser và truy cập: `http://localhost:3000`

## 📁 Cấu trúc thư mục

```
fb4/
├── public/
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── LoginPage.js         # Trang đăng nhập
│   │   ├── SignUpPage.js        # Trang đăng ký
│   │   └── ForgotPasswordPage.js # Trang quên mật khẩu
│   ├── App.js                   # Component chính
│   ├── index.js                 # Entry point
│   └── index.css                # Global styles
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 🎨 Các trang

### 1. Trang Đăng Nhập (/)
- Nhập email/số điện thoại và mật khẩu
- Link "Quên mật khẩu"
- Nút "Tạo tài khoản mới"

### 2. Trang Đăng Ký (/signup)
- Nhập tên, họ, email, mật khẩu
- Xác nhận mật khẩu
- Validation dữ liệu

### 3. Trang Quên Mật Khẩu (/forgot-password)
- Nhập email để đặt lại mật khẩu
- Gửi liên kết đặt lại qua email

## 🔧 Scripts

```bash
# Chạy development server
npm start

# Build cho production
npm run build

# Run tests
npm run test

# Eject configuration (không thể hoàn tác)
npm run eject
```

## 🚀 Phát triển tiếp theo

- [ ] Kết nối Backend API
- [ ] Xác thực JWT
- [ ] Trang Dashboard quản lý khách hàng
- [ ] Database MongoDB
- [ ] Tính năng tìm kiếm, lọc khách hàng
- [ ] Export dữ liệu CSV/Excel
- [ ] Phân quyền (Admin/User)
- [ ] Email verification
- [ ] Two-factor authentication

## 📝 API Endpoints (Chuẩn bị)

```
POST   /api/auth/login           - Đăng nhập
POST   /api/auth/register        - Đăng ký
POST   /api/auth/forgot-password - Quên mật khẩu
GET    /api/customers            - Lấy danh sách khách hàng
POST   /api/customers            - Thêm khách hàng
PUT    /api/customers/:id        - Cập nhật khách hàng
DELETE /api/customers/:id        - Xóa khách hàng
```

## 📄 License

MIT

## 👨‍💻 Author

nuakieplenhdenh123

## 📧 Support

Nếu có vấn đề, vui lòng tạo issue trên GitHub.
