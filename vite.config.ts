import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";


const port = Number(process.env.PORT ?? "3000");
const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Split large, stable third-party libraries into their own chunks so
        // they are cached once and reused across every route navigation,
        // instead of being bundled and re-downloaded inside each page chunk.
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (/[\\/]react(-dom)?[\\/]|[\\/]scheduler[\\/]/.test(id)) return "react-vendor";
            if (id.includes("@radix-ui")) return "radix";
            if (id.includes("framer-motion")) return "motion";
            if (id.includes("react-helmet")) return "helmet";
          }
        },
      },
    },
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
