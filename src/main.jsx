import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "modern-normalize";
import "./index.css";
import Modal from "react-modal";

// Set the app element for accessibility
Modal.setAppElement("#root"); // Replace '#root' with the appropriate selector for your app's root element

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
