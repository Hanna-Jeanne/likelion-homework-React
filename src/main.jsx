import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <h1 className="hello">안녕!</h1>
    </StrictMode>
  );
}
