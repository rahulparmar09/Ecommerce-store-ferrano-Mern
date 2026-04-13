# 🛒 Ferrano – MERN E-commerce Project

Ferrano is a full-stack **E-commerce web application** built using the MERN stack:

**MongoDB | Express.js | React.js | Node.js**

It includes product listing, cart system, authentication, order management, and payment integration (Stripe + Razorpay).

---

## 🚀 Features

- User Signup & Login (JWT Authentication)
- Product Listing
- Shopping Cart System
- Checkout System
- Cash on Delivery (COD)
- Stripe Payment Integration
- Razorpay Payment Integration
- Order History
- Basic Admin Panel (Products & Orders)
- Responsive UI (Mobile Friendly)

---

## 🧰 Tech Stack

**Frontend:**
- React.js
- Axios
- CSS / Tailwind / Bootstrap

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose

**Other:**
- JWT Authentication
- Stripe API
- Razorpay API
- Context API / Redux (optional)

---

## ⚙️ Installation Guide

### 📥 Step 1: Clone the Project

```bash
git clone https://github.com/pranto113015/forever-shopping.git
cd forever-shopping
```

### 📦 Step 2: Setup Backend

```bash
cd backend
npm install
```

Create a .env file in the /backend directory:

```bash
MONGODB_URL = your_mongodb_atlas_connection_string
CLOUDINARY_API_KEY = your_cloudinary_api_key
CLOUDINARY_SECRET_KEY = your_cloudinary_secret_key
CLOUDINARY_NAME = your_cloudinary_name
JWT_SECRET = your_jwt_secret
ADMIN_EMAIL = "admin@example.com"
ADMIN_PASSWORD = "admin123"
STRIPE_SECRET_KEY = your_stripe_secret_key
RAZORPAY_KEY_SECRET = your_rasorpay_key_secret
RAZORPAY_KEY_ID = your_rasorpay_key_id
PORT=5000
```

Run the backend server:

```bash
npm run dev
```

Now Backend will run on like http://localhost:5000

### 💻 Step 3: Setup Frontend

```bash
cd frontend
npm install
```

Create a .env file in the /frontend directory:

```bash
VITE_BACKEND_URL= your_backend_url_port
VITE_RAZORPAY_KEY_ID = your_razorpay_key_id
```

Now Frontend will run on like http://localhost:3000
