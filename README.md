🚀 Digital Task Manager (Full Stack MERN)

A full-stack Task Management Web Application with Authentication.

Built using:
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- HTML / CSS / JavaScript

---

## 🌐 Live Demo

Frontend:  🔗 <ADD_YOUR_VERCEL_LINK_HERE>  
Backend API: 🔗 <ADD_YOUR_RENDER_LINK_HERE>

---

## ✨ Features

### 🔐 Authentication
- Register user
- Login user
- JWT token authentication
- Logout
- Each user sees ONLY their own tasks

### ✅ Task Management (CRUD)
- Add task
- View tasks
- Update task
- Delete task
- Mark complete

### 🎨 UI
- Responsive layout
- Clean modern design
- Gradient background
- Auto-resizing description box

---

# 📂 Project Structure

Digital/
│
├── Backend/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── server.js
│ ├── package.json
│ ├── .env.example
│
├── Frontend/
│ ├── index.html
│ ├── style.css
│ ├── script.js
│
├── .gitignore
└── README.md


---

# 💻 Run Project Locally (NO Atlas Required)

This project runs using **local MongoDB**, so reviewers DO NOT need my database.

---

## 🟢 Step 1 — Install MongoDB Community

Download & install:
👉 https://www.mongodb.com/try/download/community

After install, start MongoDB server:

### Windows
mongod


### Mac/Linux
brew services start mongodb-community


---

## 🟢 Step 2 — Clone repository

git clone <YOUR_REPO_LINK>
cd Digital


---

## 🟢 Step 3 — Backend setup

cd Backend
npm install


Create environment file:

cp .env.example .env


Start server:

npm start


Backend runs on:
http://localhost:5000


---

## 🟢 Step 4 — Run frontend

Open:

Frontend/index.html


in browser

---

✅ Done! App will now work locally with:

mongodb://127.0.0.1:27017/digital_tasks


---

# 🌍 Deployment

## Backend (Render)
- Hosted on Render
- Environment variables set in dashboard

## Frontend (Vercel)
- Hosted on Vercel
- Uses deployed backend API

---

# 📌 API Endpoints

## Auth
POST /api/auth/register  
POST /api/auth/login  

## Tasks
GET /api/tasks  
POST /api/tasks  
PUT /api/tasks/:id  
DELETE /api/tasks/:id  

---

# 🔐 Environment Variables

Example:

MONGO_URI=mongodb://127.0.0.1:27017/digital_tasks
PORT=5000
JWT_SECRET=secretkey


---

# 🧠 Tech Stack

### Backend
- Express.js
- MongoDB + Mongoose
- JWT
- bcrypt

### Frontend
- HTML
- CSS
- Vanilla JavaScript

---

# 👨‍💻 Author

Anurag Chandra
