# 🚀 Digital Task Manager (Full Stack MERN)

A full-stack **Task Management Web Application** with secure authentication and per-user task storage.

Built using:

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- HTML / CSS / JavaScript

---

# 🌐 Live Demo

### Frontend
🔗 https://digital-nine-xi.vercel.app/

### Backend API
🔗 https://digital-bxk7.onrender.com/

---

# ✨ Features

## 🔐 Authentication
- Register user
- Login user
- JWT token authentication
- Logout
- Each user sees ONLY their own tasks

## ✅ Task Management (CRUD)
- Add task
- View tasks
- Update task
- Delete task
- Mark complete

## 🎨 UI
- Responsive layout
- Clean modern design
- Gradient background
- Auto-resizing description box

---

# 📂 Project Structure

```
Digital/
│
├── Backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│
├── Frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
├── .gitignore
└── README.md
```

---

# 💻 Run Project Locally (No Atlas Required)

This project runs using **local MongoDB**, so reviewers **do not need my cloud database or credentials**.

---

## 🟢 Step 1 — Install MongoDB Community

Download and install:

https://www.mongodb.com/try/download/community

Start MongoDB server:

### Windows
```bash
mongod
```

### Mac/Linux
```bash
brew services start mongodb-community
```

---

## 🟢 Step 2 — Clone Repository

```bash
git clone <YOUR_REPO_LINK>
cd Digital
```

---

## 🟢 Step 3 — Backend Setup

```bash
cd Backend
npm install
```

Create environment file:

```bash
cp .env.example .env
```

Start backend:

```bash
npm start
```

Backend runs at:

```
http://localhost:5000
```

---

## 🟢 Step 4 — Run Frontend

Open this file directly in browser:

```
Frontend/index.html
```

---

## ✅ Done

App now runs locally using:

```
mongodb://127.0.0.1:27017/digital_tasks
```

No Atlas or cloud setup required.

---

# 🌍 Deployment

## Backend — Render
- Hosted on Render
- Uses MongoDB Atlas
- Environment variables configured in dashboard

## Frontend — Vercel
- Hosted on Vercel
- Connects to deployed backend API

---

# 📌 API Endpoints

## Auth
```
POST /api/auth/register
POST /api/auth/login
```

## Tasks
```
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
```

---

# 🔐 Environment Variables

Example `.env`:

```
MONGO_URI=mongodb://127.0.0.1:27017/digital_tasks
PORT=5000
JWT_SECRET=secretkey
```

---

# 🧠 Tech Stack

## Backend
- Express.js
- MongoDB + Mongoose
- JWT
- bcrypt

## Frontend
- HTML
- CSS
- Vanilla JavaScript

---

# 👨‍💻 Author

Anurag Chandra
