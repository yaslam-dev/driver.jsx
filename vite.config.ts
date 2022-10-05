import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import { EsLinter, linterPlugin } from "vite-plugin-linter";

export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ["./src}/**/*.{ts,tsx}"],
      linters: [new EsLinter({ configEnv })],
    }),
    dts({
      include: ["./index.d.ts"],
      beforeWriteFile: (filePath, content) => ({
        content,
      }),
    }),
  ],
  build: {
    lib: {
      entry: resolve("lib", "main.ts"),
      name: "driver.jsx",
      formats: ["es"],
      fileName: `react-driver`,
    },
    rollupOptions: {
      external: ["react"],
    },
  },
}));
