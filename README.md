# 📝 Todo Full Stack Application

A full-stack Todo application built using **Spring Boot (Java)** for the backend and **React (Vite)** for the frontend.  
This project demonstrates RESTful API development, CRUD operations, and frontend–backend integration.

---

## 🚀 Tech Stack

### Backend
- Java 21
- Spring Boot
- Spring Data JPA
- MySQL
- Maven

### Frontend
- React (Vite)
- JavaScript
- HTML5
- CSS3

---

## 📂 Project Structure

todolist-fullstack/
│
├── demo/ # Spring Boot backend
│ ├── src/main/java
│ ├── src/main/resources
│ └── pom.xml
│
├── frontend/
│ └── todo/ # React frontend (Vite)
│ ├── src/
│ ├── public/
│ └── package.json
│
└── .gitignore


---

## ✨ Features

- Create Todo
- View all Todos
- Update Todo
- Delete Todo
- REST API integration
- Clean separation of frontend and backend

---

## ⚙️ How to Run the Project Locally

### 1️⃣ Backend Setup (Spring Boot)

#### Prerequisites
- Java 17 or higher
- Maven
- MySQL running

#### Steps
```bash
cd demo
mvn spring-boot:run


Backend will run on:

http://localhost:8080

2️⃣ Frontend Setup (React)
Prerequisites

Node.js (v18+ recommended)

npm

Steps
cd frontend/todo
npm install
npm run dev


Frontend will run on:

http://localhost:5173

🔗 API Integration

The frontend communicates with the backend using REST APIs.

Example endpoint:

GET http://localhost:8080/api/todos


CORS is enabled in the backend to allow frontend requests.

🛠️ Database Configuration

Create a MySQL database:

CREATE DATABASE todo_db;


Update application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/todo_db
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
spring.jpa.hibernate.ddl-auto=update
