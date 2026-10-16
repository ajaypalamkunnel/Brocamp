import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TodocontextProvider from "./context/TodocontextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodocontextProvider>
      <App />
    </TodocontextProvider>
  </StrictMode>
);
