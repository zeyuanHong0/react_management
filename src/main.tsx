import { createRoot } from "react-dom/client";
import 'virtual:svg-icons-register';
import App from "./App.tsx";
import "@/styles/index.scss";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
