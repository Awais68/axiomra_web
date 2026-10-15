import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import compression from "vite-plugin-compression";

export default defineConfig(({ command, mode }) => {
  // VITE_API_URL is inlined at build time, so a build without it would ship a
  // contact form that posts to nowhere. Fail the build instead. The dev server
  // alone gets the local API as a default.
  const { VITE_API_URL } = loadEnv(mode, process.cwd(), "VITE_");
  if (!VITE_API_URL) {
    if (command === "build") {
      throw new Error(
        "VITE_API_URL is not set. Set it to the API origin, e.g. VITE_API_URL=https://api.example.com npm run build"
      );
    }
    process.env.VITE_API_URL = "http://localhost:5000";
  }

  return {
    plugins: [
      react(),
      // Pre-compressed copies next to each asset, for hosts that serve them.
      compression({ algorithm: "gzip" }),
      compression({ algorithm: "brotliCompress", ext: ".br" }),
      // `ANALYZE=1 npm run build` writes a bundle treemap to stats.html,
      // outside dist so it is never deployed.
      process.env.ANALYZE &&
        visualizer({ filename: "stats.html", gzipSize: true, brotliSize: true }),
    ],
    server: { port: 5173 },
    // The prerender bundles its dependencies: several (react-helmet-async
    // among them) ship CommonJS that Node cannot import by name.
    ssr: { noExternal: true },
    test: {
      environment: "jsdom",
      setupFiles: ["./src/test/setup.js"],
      include: ["src/**/*.test.{js,jsx}"],
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    build: {
      target: "es2020",
      manifest: true,
      cssCodeSplit: true,
      chunkSizeWarningLimit: 800,

      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes("node_modules")) return;
            if (/node_modules\/gsap\//.test(id)) return "gsap";
            if (/node_modules\/(framer-motion|motion|motion-dom|motion-utils)\//.test(id))
              return "motion-vendor";
            if (
              /node_modules\/(react|react-dom|scheduler|react-router|react-router-dom|@remix-run)\//.test(
                id
              )
            )
              return "react-vendor";
          },
        },
      },
    },
  };
});
