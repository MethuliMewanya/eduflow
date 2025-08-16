# 🎓 EDUFLOW - Student Materials Recommendation System

This is a full-stack web application that recommends YouTube videos based on students' marks and subjects.  
Built with:

- **Backend:** [Ballerina](https://ballerina.io/)
- **Frontend:** Vite + React + TypeScript
- **Collaboration:** GitHub

---

## 📁 Project Structure

```bash
project-root/
├── backend/                    # Ballerina backend source
│   └── main.bal                # Main Ballerina service file
│
├── frontend/                   # React frontend (Vite + TypeScript)
│   ├── src/                    # Source code for frontend
│   └── vite.config.ts          # Vite configuration file
│
├── Dockerfile.backend          # Dockerfile for backend
├── Dockerfile.frontend         # Dockerfile for frontend
├── docker-compose.yml          # Docker Compose orchestration file
├── README.md                   # Main project documentation
└── SETUP_GUIDELINES.md         # Setup and run instructions (you are here!)

```
---

## ⚙️ Requirements

Make sure the following tools are installed:

- [Docker & Docker Compose](https://docs.docker.com/get-docker/)
- [Git](https://git-scm.com/)
- Optional: Node.js (for local frontend dev), Ballerina CLI (for local backend dev)

---

## 🚀 Running the Project (First Time Setup)

1. **Clone the repository**

```bash
git clone https://github.com/MethuliMewanya/eduflow.git
cd eduflow

```
2. **Set Your YouTube API Key**

- To use EduFlow, you need a YouTube Data API v3 key. Follow the below linked YouTube to get your API key.
 [How to get YouTube API key](https://youtu.be/LLAZUTbc97I?si=vCAsf443VPKK1j1N)

- Copy the generated key and paste it in the line 77 of main.bal file in the backend folder.

2. **Build & Run All Services**

```bash
docker compose up --build

```

3. **Open in Browser**

- **Frontend:** http://localhost:5173
- **Backend (API):** http://localhost:8080


## 📦 Backend (Ballerina)

- **Source folder:** backend/
- **Main file:** main.bal
- **API port:** 8080

To run locally without Docker:

```bash
cd backend
bal run

```

## 💻 Frontend (React + Vite + TS)

- **Source folder:** frontend/
- **Dev port:** 5173

To run locally without Docker:

```bash
cd frontend
npm install
npm run dev

```

## 🧯 Common Issues

- **Port Already in Use:** Make sure ports 5173 and 8080 are free, or change them in Docker and Vite config.
- **Crypto Hash Error (React):** This has been resolved using proper polyfills and Docker setup. If it reappears, ensure Docker uses Node 20+.

---



