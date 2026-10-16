import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createStore } from "redux";
import allReducres from "./store/index.js";
import { Provider } from "react-redux";

const store = createStore(
  allReducres,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
   
      <App />
   
  </StrictMode>
);
