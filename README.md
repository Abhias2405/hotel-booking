# 🏨 Hotel Booking Application

<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=47A248" alt="mongodb" />
    <img src="https://img.shields.io/badge/-Express-black?style=for-the-badge&logoColor=white&logo=express&color=000000" alt="express" />
    <img src="https://img.shields.io/badge/-React-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react" />
    <img src="https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logoColor=white&logo=node.js&color=339933" alt="node.js" />
  </div>

  <h3 align="center">Full-Stack Hotel Booking Platform</h3>

  <div align="center">
    A MERN stack application with end-to-end testing, secure authentication, and payment integration
  </div>
</div>

## 🌟 Live Demo
[Hotel Booking App](https://hotel-booking-40sv.onrender.com/)

## 🎯 Features

👉 **User Authentication**
- Secure registration and login
- HTTP-only cookie based authentication
- Password encryption with bcryptjs
- JWT token authentication
- Form validation using express-validator

👉 **Booking Management**
- Browse available rooms
- Make reservations
- View booking history
- Manage bookings

👉 **Payment Integration**
- Secure payment processing with Stripe
- Test card integration
- Payment verification

👉 **Image Management**
- Cloudinary integration for image uploads
- Multer middleware for file handling
- Image optimization

👉 **End-to-End Testing**
- Playwright testing framework
- Separate test database
- Automated test scenarios
- Comprehensive test coverage

## 💻 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- TypeScript
- JWT Authentication
- Cloudinary
- Stripe

### Frontend
- React.js
- React Query
- React Hook Form
- Tailwind CSS
- TypeScript

### Testing
- Playwright
- End-to-end testing
- Cross-env for environment variables

## 🛠️ Installation & Setup

1. **Clone Repository**
```bash
git clone https://github.com/Abhias2405/hotel-booking.git
```

2. **Backend Setup**
```bash
cd backend
npm install
npm run dev
```

3. **Frontend Setup**
```bash
cd frontend
npm install
npm run dev
```

4. **Environment Variables**
Create `.env` file in backend directory:
```env
MONGODB_CONNECTION_STRING=
JWT_SECRET_KEY=
FRONTEND_URL=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
STRIPE_API_KEY=
```

## 🧪 Testing

1. **Setup Test Environment**
```bash
npm init playwright@latest
npm i cross-env
```

2. **Configure Test Database**
- Create separate MongoDB database for testing
- Update test environment variables

3. **Run Tests**
```bash
npm run test
```

## 🚀 Deployment

### Backend (Render.com)
1. Add build and start scripts to `package.json`
2. Configure environment variables in Render dashboard
3. Add MongoDB IP whitelist:
   - 3.75.158.163
   - 3.125.183.140
   - 35.157.117.28
4. Set NODE_VERSION in environment variables

### Frontend
1. Build the application
2. Deploy to hosting platform of choice
3. Update API endpoints

## 💳 Test Payment

Use the following test card for payment integration:
- Card Number: 4242 4242 4242 4242
- Any future date for expiry
- Any 3-digit CVC

## 📱 Responsive Design

- Mobile-first approach
- Tailwind CSS for responsive layouts
- Optimized for all screen sizes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- MongoDB Atlas
- Render.com
- Cloudinary
- Stripe
- Playwright
- All open-source contributors
