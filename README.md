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
- Tailwind 

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose

**Other:**
- JWT Authentication
- Stripe API
- Razorpay API
- Context API 

---

## ⚙️ Installation Guide

### 📥 Step 1: Clone the Project

```bash
git clone https://github.com/rahulparmar09/Ecommerce-store-ferrano-Mern.git
cd ferrano
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
npm start
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

Run the frontend server:

```bash
npm run dev
```

Now Frontend will run on like http://localhost:3000

### ☁️ Step 4: MongoDB Atlas Setup (Free Cloud DB)

1. Visit: https://www.mongodb.com/cloud/atlas/register
2. Create a Free Shared Cluster
3. Create a DB user (e.g., e-commerce)
4. Whitelist IP Address → Allow Access from Anywhere (0.0.0.0/0)
5. Click Connect → Connect your application
6. Copy your Mongo URI Like :
   ```bash
   mongodb+srv://demo:kjkfldjskdljfkls@er4ere.dfdf.hdfkjhsdfhd/jlkjfdklsjdklf?retryWrites=true&w=majority
   ```
7. Paste it into your .env file as MONGO_URI

### 🔐 Step 5: Admin Setup

Option 1: Use Predefined Admin Credentials
| Role | Email | Password |
| ----- | --------------------------------------------- | -------- |
| Admin | [admin@example.com](mailto:admin@example.com) | admin123 |

Option 2: Promote Your Own Account

1. Register a new user on the frontend

2. Go to MongoDB Atlas → Cluster → Collections → users

3. Find your user and update the role like:

   ```json
   {
     "role": "admin"
   }
   ```

4. Save and re-login — you now have admin access
   **🎯 Done! Your full-stack e-commerce site is now running locally 🚀**

## 🧱 Project Structure

```bash
forever-shopping/
│
├── backend/                  # Express backend + Mongoose schemas
│   ├── controllers/          # Request handlers
│   ├── models/               # MongoDB schemas
│   ├── routes/               # API routes
│   └── .env                  # Environment config
│
├── frontend/                 # React frontend
│   ├── components/           # Reusable UI components
│   ├── pages/                # User-facing pages
│   ├── context/              # Auth & state management
│   └── App.js                # Main app file
│
├── admin/                    # Admin dashboard
│   ├── components/           # Admin UI components (e.g., Sidebar, Navbar)
│   ├── pages/                # Admin pages (UserList, ProductList, Orders)
│   ├── services/             # API calls related to admin
│   ├── utils/                # Helper functions
│   └── App.js                # Admin app entry point
│
└── README.md                 # Project guide
```

## 🔗 Live link

[Click here](https://ecommerce-store-ferrano-mern.vercel.app/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙌 Acknowledgements

- Developed as part of the **own learning**.
- Inspired by MERN project like Full Stack E-comerce site.



