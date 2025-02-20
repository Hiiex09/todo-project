import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/todo-project/", // Add this line
  plugins: [tailwindcss(), react()],
});
