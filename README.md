# 🌍 Map Locations React App

A full-stack React application demonstrating user authentication, a dynamic dashboard, and an interactive map view using open-source tools.

> **Assignment Reference: Syncthreads Task**

---

## 🚀 Features

- 🔐 JWT-based user authentication
- 🗺️ Interactive map of India using React-Leaflet
- 📊 Dynamic dashboard with clickable cards
- 📍 Map navigation and zoom controls
- ⚡ Responsive and styled UI with Styled Components
- 🍪 JWT token storage using Cookies
- 📦 Fully integrated Node.js + Express backend API

---

## 🛠️ Tech Stack

**Frontend:**
- React
- React Router DOM
- React Leaflet
- Styled Components
- React Icons
- React Loader Spinner
- JS-Cookie

**Backend:**
- Node.js
- Express.js
- JSON Web Tokens (JWT)

---


---

## 🔐 Authentication Flow

- User logs in → receives JWT → stored in cookies
- JWT is sent in request headers for dashboard and map data
- Protected API routes verify JWT before serving data
- Unauthorized access returns appropriate error messages

---

## 📌 API Endpoints

| Method | Endpoint         | Description                         | Auth Required |
|--------|------------------|-------------------------------------|----------------|
| POST   | `/api/login`     | Authenticates user and returns JWT | ❌ No           |
| GET    | `/api/dashboard` | Returns dashboard card data        | ✅ Yes          |
| GET    | `/api/map`       | Returns map configuration data     | ✅ Yes          |

---

## 🌐 Map View Integration

Integrated using React Leaflet
Shows map of India on load
Zoom in / Zoom out supported
Card clicks on dashboard redirect to map view

## 🎨 UI/UX Design

Styled using Styled Components
Responsive layout
Clean, minimal, user-friendly interface
Inspired by Figma design portfolio

## Login Credentials (Valid Credentials)
1.
username: user
password: password

2.
username: Ravi
password: Ravi@1234

3.
username: Sai
password: Sai@1234


## Running Project
1. Start the backend server: node index.js
2. Start the frontend server: npm start


## Figma Links:
https://www.figma.com/proto/lQ7r5NjcrYxWvFauP023dK/Company-Assignment?node-id=1-3&p=f&t=XdGuBDkoBUXfCQOw-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3

https://www.figma.com/design/lQ7r5NjcrYxWvFauP023dK/Company-Assignment?node-id=0-1&t=QpjEJbDYx4lvXCGK-1
