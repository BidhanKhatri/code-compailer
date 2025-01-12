import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CodeComProvide from "./context/CodeComContext.jsx";

createRoot(document.getElementById("root")).render(
  <CodeComProvide>
    <App />
  </CodeComProvide>
);
