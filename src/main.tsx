import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { normalizePath } from "./site";
import "./index.css";

const root = document.getElementById("root")!;
const app = <App path={normalizePath(window.location.pathname)} />;

if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
