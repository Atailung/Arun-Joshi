import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Function to check if WebGL is available
function isWebGLAvailable() {
  try {
    const canvas = document.createElement("canvas");
    return (
      !!window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

// Render the app based on WebGL support
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Root element not found!");
} else if (isWebGLAvailable()) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  alert("Your browser or device does not support WebGL.");
}
