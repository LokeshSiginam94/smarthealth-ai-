# SmartHealth AI

An AI-Powered Digital Health Assistant built using the MERN Stack and Google Gemini AI.

SmartHealth AI is a full-stack healthcare web application that enables users to monitor their daily health, manage personal wellness, track BMI, hydration, sleep, nutrition, and interact with an AI-powered health chatbot. The application also includes a secure admin dashboard for monitoring users and health data.

## 🚀 Features

### 👤 User Module
- 🔐 Secure User Registration & Login (JWT Authentication)
- 👤 Personal Health Profile Management
- 📊 Health Dashboard
- 🤖 AI Health Chatbot (Google Gemini AI)
- 🩺 Symptom Checker
- ⚖️ BMI Calculator
- 💧 Daily Water Intake Tracker
- 😴 Sleep Tracker
- 🥗 Nutrition Monitoring
- 📈 Personalized Health Insights
- 📱 Fully Responsive UI

### 👨‍💼 Admin Module
- 🔐 Secure Admin Authentication
- 📊 Admin Dashboard
- 👥 View All Registered Users
- 📋 Monitor User Health Profiles
- 📈 View BMI & Health Statistics
- 🗑️ Manage User Accounts
- 📊 Overall System Monitoring

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Tailwind CSS
- Lucide React
- Axios
- Context API

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcrypt.js

### AI Integration
- Google Gemini AI API

## 📂 Project Structure

```text
smarthealth-ai/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── README.md
├── package-lock.json
└── .gitignore
```

## ⚙️ Installation Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/LokeshSiginam94/smarthealth-ai-.git
cd smarthealth-ai-main
```

### 📦 Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_gemini_api_key
```

Start the backend server:

```bash
npm run dev
```

Backend Server:

```text
http://localhost:5000
```

Expected Output:

```text
✅ MongoDB Connected
🚀 Server running on port 5000
```

### 💻 Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

## 🔐 Authentication

The application uses JWT Authentication for secure login.

After successful login, the backend returns:

```json
{
  "token": "JWT_TOKEN",
  "user": {
    "_id": "...",
    "name": "...",
    "email": "...",
    "role": "user"
  }
}
```

The frontend securely stores:
- JWT Token
- User Information

Protected API requests include:

```http
Authorization: Bearer <TOKEN>
```

## 🗄️ Database Collections

The project uses the following MongoDB collections:
- `users`
- `profiles`
- `todaylogs`

### Database Relationship

```text
User
   │
   ▼
Profile
   │
   ▼
Today Log
```

## 🤖 AI Health Assistant

SmartHealth AI integrates Google Gemini AI to provide:
- Health-related guidance
- Symptom analysis
- Wellness suggestions
- General health awareness
- Interactive AI conversations

## 🌐 REST API Endpoints

### Authentication
- `POST /api/auth/register`
- `POST /api/auth/login`

### Profile
- `GET /api/profile`
- `PUT /api/profile`

### Today Log
- `GET /api/today-log`
- `PUT /api/today-log`

### Admin
- `GET /api/admin/dashboard`
- `DELETE /api/admin/user/:id`

## 🚀 Future Enhancements
- 🧠 AI Disease Prediction
- 💊 Medicine Reminder
- 📅 Doctor Appointment Booking
- 📄 PDF Health Reports
- 📊 Interactive Analytics Dashboard
- ❤️ Heart Rate Monitoring
- ⌚ Smart Wearable Integration
- 🚑 Emergency Health Assistance

## 📸 Screenshots

You can add screenshots of the application here.

- Home Page
- Dashboard
- AI Chatbot
- Health Profile
- Admin Dashboard

## 👨‍💻 Developer

**Lokesh Siginam**  
B.Tech – Computer Science & Engineering (Artificial Intelligence & Machine Learning)

📧 Email: [lokeshsiginam199@gmail.com](mailto:lokeshsiginam199@gmail.com)  
🐙 GitHub: [https://github.com/LokeshSiginam94](https://github.com/LokeshSiginam94)

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.

## 📄 License

This project is developed for educational, portfolio, and learning purposes.  
© 2026 Lokesh Siginam. All Rights Reserved.