# 🌍 Planets Fact Site

This is a fully responsive, interactive website about the planets in our solar system. The project was developed as part of a [Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f) challenge to improve skills in React, TypeScript, and component-driven UI design.


## ✨ Features

- Dynamic client-side routing using `react-router-dom` (one route per planet)
- Fully interactive tab system (Overview, Internal Structure, Surface Geology)
- Smooth component transitions and image animations with `framer-motion`
- Mobile-first responsive layout with adaptive design breakpoints
- Custom per-planet color theming for a cohesive visual experience
- Hamburger navigation menu for screens 768px and below (mobile & iPad)
- Data-driven content and image rendering from a central `data.json` file


## 🛠 Tech Stack

- **React** – Built using functional components and React Hooks (`useState`, `useEffect`) to manage state and side effects. This allows for a clean and modular approach to building UI elements.
- **TypeScript** – Adds static typing to JavaScript, ensuring better code reliability and maintainability. It helps catch errors early in the development process and makes it easier to work with complex data structures (e.g., `PlanetData`).
- **React Router v6** – Provides dynamic, client-side routing to manage navigation across the app. Each planet gets its own page, with routes based on planet names, allowing seamless transitions between them.
- **Framer Motion** – A library used to add smooth and declarative animations. It powers the transitions between planet pages and animates images, enhancing the user experience with visually appealing effects.
- **SCSS Modules** – Scoped styling with SCSS for modular, maintainable styles. Utilizes variables and mixins for reusable design patterns.
- **Vite** – A fast build tool and development server that provides lightning-fast startup and optimized build processes. It’s used to bundle and serve the app efficiently during development.
