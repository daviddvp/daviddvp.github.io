import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" hace que el build funcione tanto en hosting de raíz (Vercel,
// Netlify) como en subcarpetas (GitHub Pages project pages).
export default defineConfig({
  plugins: [react()],
  base: "./",
});
