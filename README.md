# ☁️ Cloud Storage App (NestJS + PostgreSQL + React)

A full-stack cloud storage application built with **NestJS** (backend), **PostgreSQL** (database), and **React** (frontend). Files are stored on the server’s local file system, while metadata is managed in a PostgreSQL database.

---

## 🚀 Features

- 📁 **File Upload & Download**  
  Upload, retrieve, and download files.

- ⚛️ **React Frontend**  
  Modern and responsive UI for managing files.

- 🗄️ **PostgreSQL Database**  
  Stores file metadata such as name, size, type, and timestamps.

- 📂 **Local File Storage**  
  Files are محفوظة على السيرفر باستخدام file system.

- 🔐 **Secure File Handling**  
  Input validation and controlled access to files.

- 📦 **RESTful API (NestJS)**  
  Scalable backend architecture with clean APIs.

- 📊 **Metadata Management**  
  Track uploads, file sizes, and ownership (if implemented).

---

## 🏗️ Architecture
Frontend (React)
│
▼
NestJS Backend (API)
│
├── 🗄️ PostgreSQL (Metadata)
│
└── 📁 Local File System (Storage)

## 🛠️ Tech Stack

### Frontend
- React
- Axios / Fetch API
- Tailwind CSS / Bootstrap (optional)

### Backend
- NestJS (Node.js framework)
- Multer (file uploads)

### Database
- PostgreSQL

### Storage
- Local File System
