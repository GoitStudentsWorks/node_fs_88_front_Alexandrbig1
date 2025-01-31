import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/node_fs_88_front_Alexandrbig1/",
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "build",
    assetsDir: "assets",
  },
  css: {
    modules: false,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
