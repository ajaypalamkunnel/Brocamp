import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CounterContexProvider from "./context/CounterContexProvider.jsx";
import { Provider }from 'react-redux'
import { store } from "./store/store.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterContexProvider>

      <Provider store={store}>
      <App />

      </Provider>
    
    </CounterContexProvider>
  </StrictMode>
);
