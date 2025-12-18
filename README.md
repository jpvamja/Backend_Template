# Project Management Backend

A production-ready **Node.js + Express + MongoDB** backend starter template built using **industry-level best practices**, clean architecture, and a **step-by-step Git commit workflow**.

This repository is designed to be reused as a **base template** for future backend projects.

---

## 🚀 Features Implemented

- Project configuration using `package.json`
- Code formatting with Prettier
- Clean and scalable folder structure
- Environment configuration using `dotenv`
- Express server setup with separated app & server logic
- CORS configuration for frontend communication
- MongoDB integration using `mongoose`
- Standard API response & error handling
- Async error handling without repetitive try–catch
- Role-based constants using enums
- Health check API endpoint
- Development workflow using `nodemon`

---

## 📁 Project Structure

```bash
project-management/
├── public/ # Static files
├── src/
│ ├── app.js # Express app configuration
│ ├── index.js # Server startup
│ ├── controllers/ # Business logic
│ ├── routes/ # API routes
│ ├── models/ # Mongoose models
│ ├── utils/ # Helpers (ApiError, ApiResponse)
│ ├── db/ # Database connection
│ ├── middlewares/ # Custom middlewares
│ └── validators/ # Request validation
├── .env.example # Environment variables template
├── .gitignore
├── .prettierrc
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- cors
- nodemon
- prettier

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd project-management
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a .env file in the root directory:

```bash
PORT=3000
MONGO_URI=your_mongodb_connection_string
CORS_ORIGIN=http://localhost:5173
```

⚠️ Never commit .env to GitHub
Use .env.example to document environment variables.

### 4️⃣ Run the server

Development mode

```bash
npm run dev
```

Production mode

```bash
npm start
```

## 🔍 Health Check API

Used to verify that the server is running.
Endpoint

```bash
GET /api/v1/healthcheck
```

### Sample Response

```bash
{
  "statuscode": 200,
  "data": {
    "message": "Server is running"
  },
  "message": "Success",
  "success": true
}
```

## 🧠 Architecture Overview

```bash
Client
  ↓
Routes
  ↓
Controllers
  ↓
Utilities / Middleware
  ↓
MongoDB
```

### Design Principles

- Separation of concerns
- Reusable utilities
- Consistent API responses
- Scalable folder structure
- Clean Git history

## 🧩 Utility Classes

### ApiResponse

Used to send standardized success responses.

### ApiError

Used to throw structured application errors with HTTP status codes.

### asyncHandler

Wraps async controllers to forward errors to Express error-handling middleware without repetitive try–catch.

## 🧱 Application Constants

- User roles enum (ADMIN, PROJECT_ADMIN, MEMBER)
- Centralized constants to avoid magic strings
- Used for authorization & validation

### 🧪 Development Notes

- Server starts only after MongoDB connection is successful
- All async controllers use asyncHandler
- CORS configuration is environment-based
- Code formatting enforced using Prettier

### 🧾 Git Commit Workflow (IMPORTANT)

This project follows a strict step-by-step commit strategy to allow fast recreation of the backend template for future projects.

## 👨‍💻 Author

### Jeet Vamja

## ⭐ Recommendation

Use this repository as a starter backend template for:

- New backend projects
- Interview preparation
- Learning backend architecture
- Production-ready API development

### Happy Coding 🚀
