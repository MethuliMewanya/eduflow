# 🚀 EduFlow - Setup Guidelines

This document provides instructions to set up and run EduFlow locally. The system consists of a React + Vite + TypeScript frontend and a Ballerina backend, fetching real-time video recommendations via the YouTube Data API v3.

## 📁 Project Structure


```bash

eduflow/
├── backend/                    # Ballerina backend source
│   └── main.bal
├── frontend/                   # React frontend (Vite + TypeScript)
│   ├── src/                    # Source code for frontend
│   │   ├── components/         # React components
│   │   ├── pages/              # Page-level components
│   │   ├── styles/             # CSS/SCSS files
│   │   ├── assets/             # Images and Icons
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   └── vite.config.ts         # Vite configuration file
├── README.md                  # Main project documentation
├── SETUP_GUIDELINES.md        # Setup and run instructions (you are here!)
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js
└── index.htm

```
---


## ⚙️ Requirements

Make sure the following tools are installed:

- Git
- Node.js (v20+ recommended)
- NPM or Yarn
- Ballerina CLI (for running backend)

Need to create a YouTube Data API Version 3 key. Follow the video [How To Get YouTube API Key](https://youtu.be/LLAZUTbc97I?si=vCAsf443VPKK1j1N) and create the key. Paste the created API key on the line 78 of main.bal file in the backend folder.

## 💻 Running the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/MethuliMewanya/eduflow.git
cd eduflow

```

### 2. **Backend Setup (Ballerina)**

```bash
cd backend
bal run

```
Backend will run at: (http://localhost:80800)

### 3. **Frontend Setup (React + Vite + TypeScript)**

Running for the first time,

```bash
cd frontend
npm install
npm install axios
npm install bootstrap  
npm install react-router-dom
npm install react-bootstrap bootstrap
npm install framer-motion
npm install -D sass-embedded
npm run dev

```

Running the Project Again (After First Time)
Once built, you can just run:

```bash
cd frontend
npm run dev

```
Frontend will run at: (http://localhost:5173)

## 🧩 Notes
- Ensure ports 8080 (backend) and 5173 (frontend) are free.
- Update YouTube API key in the backend before running.
