# Surya Prakash S. - Portfolio

A full-stack portfolio website built to showcase projects, skills, and experience as a Full-Stack MERN Developer. The application features a dynamic React frontend and a Node.js/Express backend connected to a MongoDB database.

## 🚀 Features

- **Modern UI**: Clean, responsive, and dynamic interface built with React.
- **Animations**: Smooth transitions and scroll animations powered by Framer Motion.
- **Backend API**: RESTful API built with Express to handle client requests.
- **Database**: MongoDB integration for persistent storage of messages and site statistics.
- **Monorepo Structure**: Separate frontend and backend directories for organized development.

## 💻 Tech Stack

### Frontend
- **Framework**: React 19 with Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: React Icons

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose)
- **Utilities**: CORS, Dotenv

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or a local MongoDB instance)

## 🛠️ Local Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Backend Setup
Open a terminal and navigate to the backend directory:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory and add your environment variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend development server:
```bash
npm start
```
*The API will be available at `http://localhost:5000`.*

### 3. Frontend Setup
Open a new terminal window and navigate to the frontend directory:
```bash
cd frontend
npm install
```

Start the Vite development server:
```bash
npm run dev
```
*The frontend will be available at `http://localhost:5173`.*

## 🚀 Deployment Guide

This project is configured to be easily deployed to modern cloud hosting platforms.

### Backend (Render)
1. Create a new Web Service on [Render](https://render.com/).
2. Connect your GitHub repository.
3. **Root Directory**: `backend`
4. **Build Command**: `npm install`
5. **Start Command**: `npm start`
6. **Environment Variables**: Add your `MONGO_URI` (and any other `.env` variables).

### Frontend (Vercel)
1. Import your GitHub repository into a new project on [Vercel](https://vercel.com/).
2. **Framework Preset**: Vercel should auto-detect `Vite`.
3. **Root Directory**: `frontend`
4. **Build Command**: `npm run build`
5. **Environment Variables**: Add an environment variable (e.g., `VITE_API_URL`) pointing to your deployed backend URL.
6. Click **Deploy**.

---

*Feel free to star ⭐ this repository if you found it helpful!*
