# 🛒 E-Commerce React App

A modern, fully responsive e-commerce web application built with React.js.

## 🔗 Live Demo
[View Live](https://e-commerce-react-five-inky.vercel.app)

## 📸 Features
- 🏠 Hero landing page with categories section
- 📦 Product listing with pagination
- 🔍 Product details page with image gallery
- 🛒 Shopping cart (add, remove, quantity control, total price)
- 📝 Registration form with full validation
- 📬 Contact Us form with success feedback
- 🌐 Arabic / English language support (RTL/LTR)
- 📱 Fully responsive design (mobile & desktop)
- 🔄 404 Not Found page

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| React.js 19 | UI framework |
| Vite | Build tool |
| Tailwind CSS | Styling |
| Redux Toolkit | State management (cart) |
| React Router v7 | Navigation & routing |
| Axios | API requests |
| Formik + Yup | Forms & validation |
| Context API | Language switching |

## 🌐 API
Data fetched from [DummyJSON](https://dummyjson.com) — a free fake REST API for testing.

## 📂 Project Structure
src/
├── components/
│   └── header/
│       ├── HeaderContainer.jsx
│       ├── NavLinks.jsx
│       └── logo.jsx
├── context/
│   └── LanguageContext.js
├── pages/
│   ├── home-page/
│   │   ├── HomePage.jsx
│   │   └── components/
│   │       ├── OurVision.jsx
│   │       └── Branches.jsx
│   ├── products-page/
│   ├── products-details/
│   ├── cart/
│   ├── register/
│   ├── contact us/
│   └── not-found/
├── providers/
│   └── LanguageProviders.jsx
├── redux/
│   └── store.js
└── reducers/
└── counterSlice.js

## 📦 Run Locally
```bash
# Clone the repo
git clone https://github.com/arwaahassann/e-commerce-react.git

# Navigate into the project
cd e-commerce-react

# Install dependencies
npm install

# Start the dev server
npm run dev
```

## 👩‍💻 Developer
**Arwa Hassan** — Frontend Developer
- GitHub: [@arwaahassann](https://github.com/arwaahassann)
