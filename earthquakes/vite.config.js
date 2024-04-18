import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    port: 4000,
    strictPort: true,
  },
  server: {
    port: 4000,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:4000",
  },
  resolve: {
    alias: {
      "@components": "/src/components",
      "@services": "/src/services",
      "@hooks": "/src/hooks",
      "@models": "/src/models",
      "@pages": "/src/pages",
      "@constants": "/src/constants",
    },
  },
});
