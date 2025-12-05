import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { StoreProvider } from "./hooks/useGlobalReducer";
import AuthProvider from "./context/AuthProvider.jsx";

// Estilos de librerías
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

// Verificación de Variable de Entorno (Hecha de forma limpia)
const backendUrl = import.meta.env.VITE_BACKEND_URL;

if (!backendUrl || backendUrl === "") {
  // Si falta la variable, mostramos un error visual en pantalla en lugar de nada
  ReactDOM.createRoot(document.getElementById("root")).render(
    <div style={{ padding: 20, color: "red", fontFamily: "sans-serif" }}>
      <h1>Error de Configuración</h1>
      <p>
        Falta definir <code>VITE_BACKEND_URL</code> en el archivo{" "}
        <code>.env</code>
      </p>
    </div>
  );
} else {
  // Renderizado normal de la App
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <StoreProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </StoreProvider>
    </React.StrictMode>
  );
}
