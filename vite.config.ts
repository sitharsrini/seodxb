import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";


// The browser bundle gets a light index of posts and industries instead of their
// full text (see scripts/gen-client-data.ts); the server render keeps the full data.
const CLIENT_SWAPS: [RegExp, string][] = [
  [/[\\/]src[\\/]blog[\\/]posts\.ts$/, "posts.client.ts"],
  [/[\\/]src[\\/]industries\.ts$/, "industries.client.ts"],
];
function clientData(): Plugin {
  return {
    name: "seodxb-client-data",
    enforce: "pre",
    async resolveId(source, importer, options) {
      if (options?.ssr || !importer) return null;
      const resolved = await this.resolve(source, importer, { ...options, skipSelf: true });
      if (!resolved) return null;
      for (const [pattern, file] of CLIENT_SWAPS) {
        if (pattern.test(resolved.id)) return path.join(path.dirname(resolved.id), file);
      }
      return null;
    },
  };
}

const port = Number(process.env.PORT ?? "3000");
const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base: basePath,
  plugins: [
    clientData(),
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
