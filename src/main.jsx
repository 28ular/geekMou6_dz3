import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider } from "react-router-dom";
import { route } from "./route.jsx";

import manifest from './manifest.json';
import icon192 from './assets/icon-192.png';
import icon512 from './assets/icon-512.png';

createRoot(document.getElementById('root')).render(
    <RouterProvider router={route}>
        <App />
    </RouterProvider>
);

// Service Worker регистрация для PWA
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js")
            .then((reg) => console.log("SW registered!", reg))
            .catch((err) => console.log("SW registration failed:", err));
    });
}
