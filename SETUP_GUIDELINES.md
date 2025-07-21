# 🎓 EDUFLOW - Student Materials Recommendation System

This is a full-stack web application that recommends YouTube videos based on students' marks and subjects.  
Built with:

- **Backend:** [Ballerina](https://ballerina.io/)
- **Frontend:** Vite + React + TypeScript
- **Containerization:** Docker + Docker Compose
- **Collaboration:** GitHub

---

## 📁 Project Structure

project-root/
│
├── backend/ # Ballerina backend source
│ └── main.bal # Main service file
│
├── frontend/ # React frontend (Vite + TS)
│ ├── src/
│ ├── vite.config.ts
│ └── ...
│
├── Dockerfile.backend # Dockerfile for backend
├── Dockerfile.frontend # Dockerfile for frontend
├── docker-compose.yml # Orchestration
└── README.md 
└── SETUP_GUIDELINES.md # You are here!

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

2. **Build & Run All Services**

```bash
docker compose up --build

```

3. **Open in Browser**

- **Frontend:** http://localhost:5173
- **Backend (API):** http://localhost:8080

---

## 🔁 Running the Project Again (After First Time)

Once built, you can just run:

```bash
docker compose up

```

To stop:

```bash
docker compose down

```

If you changed any Dockerfiles or dependencies, re-run with:

```bash
docker compose up --build

```

---


## 🧯 Common Issues

- **Port Already in Use:** Make sure ports 5173 and 8080 are free, or change them in Docker and Vite config.
- **Crypto Hash Error (React):** This has been resolved using proper polyfills and Docker setup. If it reappears, ensure Docker uses Node 20+.

---

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



