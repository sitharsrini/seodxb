import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { normalizePath } from "./site";
import "./index.css";
import { captureFirstTouch } from "./attribution";
import { loadRouteData } from "./route-data";
import { loadPage } from "./load-page";

captureFirstTouch();

async function start() {
  const path = normalizePath(window.location.pathname);
  // The current page's full content must be present before hydrating.
  await loadRouteData(path).catch(() => {});
  const page = await loadPage(path);
  const root = document.getElementById("root")!;
  const app = <App path={path}>{page}</App>;
  if (root.hasChildNodes()) hydrateRoot(root, app);
  else createRoot(root).render(app);
  (window as unknown as { __hydrated: boolean }).__hydrated = true;
}

start();
