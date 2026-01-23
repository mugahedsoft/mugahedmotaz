import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initGA4 } from "./lib/analytics";

initGA4(import.meta.env.VITE_GA_MEASUREMENT_ID);

createRoot(document.getElementById("root")!).render(<App />);
