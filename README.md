# 🎬 Netflix Full-Stack SaaS Platform & Interactive Admin Analytics Dashboard

A production-ready, enterprise-grade movie streaming interface and robust user management system built from scratch. This architecture showcases bulletproof role-based access control (RBAC), real-time database tracking, dynamic timeline charts, and cinematic animation engines.

---

## 🛠️ Technical Stack & Production Framework

### Frontend (Client Tier)
- **Framework:** React.js (via Vite Assembly Tooling)
- **Styling Architecture:** Tailwind CSS v4 Engine
- **Data Visualization:** Recharts Engine (Dynamic Vector Graphics)
- **Routing Engine:** React Router DOM v6
- **HTTP Client:** Axios (With Global Network Configurations)

### Backend (Server Tier)
- **Runtime Environment:** Node.js (V8 JavaScript Engine)
- **Web Framework:** Express.js Framework
- **Security Protocols:** JSON Web Tokens (JWT) & BcryptJS Password Hashing
- **Database Engine:** MongoDB Atlas (Cloud Cluster Storage System)
- **Object Modeling:** Mongoose ODM Framework

---

## 🔥 Key Engineering & Architectural Highlights

### 1. Master Administrative Dashboard (State-Driven Multi-Tab System)
- Engineered an interactive command central using high-fidelity local state hooks to split core functionalities.
- **Dynamic Tab Toggling:** System administrators can instantly flip view perspectives between platform performance graphs and raw tabular consumer accounts without triggering full-page reload bottlenecks.

### 2. Live Data Visualization with Dynamic Time Filters (Recharts Engine)
- Rendered an advanced **Area Chart Architecture** injected with localized vector linear gradients (`#E50914`) to plot precise data densities.
- Synchronized an absolute data pipeline directly to **MongoDB Atlas via Mongoose**.
- Developed an analytical time-range switch module allowing admins to isolate real-time consumer signup metrics by **Today**, **Yesterday**, and **Last Week** intervals based on `createdAt` database timestamps.

### 3. Smart Cross-Component Bridge Hooks (Click-to-Inspect Cards)
- Positioned micro-analytical metric cards displaying aggregated computational values for *Total Registered Profiles*, *Active Users*, and *Deactivated Accounts*.
- Programmed a direct UX communication wire: clicking any operational metric card forces the global state router to seamlessly flip user tabs, directly indexing the targeted directory tables below.

### 4. Fully Responsive Cinematic Movie Carousel Slider
- Designed an interactive Netflix-branded content preview section completely independent of volatile network connections.
- Implemented **3D Hardware Accelerated Transforms (`translate3d`)** paired with sub-millisecond **CSS Keyframe Transitions**, offloading intensive UI layout paints onto the local GPU for seamless frame rates during video capture demos.

### 5. Automated System Administrator Escalation Rules
- Written a structural system deployment query utilizing `User.countDocuments({})` protocols.
- **The Alpha Node Rule:** The exact first profile signed up on the application is instantly hardcoded as a privileged **`admin`** role with immediate **`Active`** status clearance. Every subsequent registration drops automatically into a secured **`user`** segment marked **`Deactivated`**.

### 6. Bulletproof Multi-Route Route Middleware Protection
- Formulated custom Node.js middleware wrappers preventing typical consumer accounts from gaining structural entrance into data logs.
- Synchronized client-side navigation constraints via **React Context**, checking incoming session credentials from `localStorage` against strict lowercase matches to completely prevent uppercase entry loopholes.

---

## 🏗️ Directory Architecture

```text
my-analytics-app/
├── backend/
│   ├── Controllers/
│   │   └── authController.js     # Auth logic, automated admin validation
│   ├── Models/
│   │   └── Users.js              # Strict Mongoose Object mapping & schema rules
│   └── server.js                 # Central Express Gateway & Cluster hook
└── frontend/
    ├── public/                   # Static localized asset matrix (st.jpg, sg.jpg)
    └── src/
        ├── auth/
        │   └── pages/
        │       ├── Login.jsx     # Cinematic Slide-In viewport authentication
        │       └── Register.jsx  # Data protocol profile generation form
        └── Fronted/              # Central user application layers
            ├── admin/
            │   ├── Component/
            │   │   ├── UserChart.jsx  # Core Recharts gradient vector area graphs
            │   │   └── StateCard.jsx  # Click-triggered monitoring system cards
            │   └── pages/
            │       └── DashBord.jsx   # Master multi-tab command board state
            └── user/
                └── component/
                    └── Banner.jsx     # High-fidelity custom slider layout
```

---

## 🚀 Deployed Installation Guide for Local Environment Testing

### 1. Stand up the Back-End Infrastructure
```bash
cd backend
npm install
npm run dev
```

### 2. Launch the Front-End Client Matrix
```bash
cd frontend
npm install
npm run dev -- --force
```

---
*Architected and Engineered by **Janak Parmar** — 2026 Full-Stack Production Portfolio.*
