import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
//import Components from "unplugin-vue-components/vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "WebWinVuePlus",
      fileName: (format) => `web-win-vue-plus.${format}.js`,
      formats: ["cjs", "es"],
      cssFileName: "style",
    },
    rollupOptions: {
      external: ["vue"],
      input: ["src/index.ts", "src/full.ts", "src/resolver.ts"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].mjs", // ← 去掉 /index.mjs
          chunkFileNames: "chunks/[name]-[hash].mjs",
          assetFileNames: "[name][extname]", // ← 去掉 style/ 前缀
          preserveModules: true,
          preserveModulesRoot: "src",
          exports: "named",
          dir: "./dist/es",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          chunkFileNames: "chunks/[name]-[hash].js",
          assetFileNames: "[name][extname]",
          preserveModules: true,
          preserveModulesRoot: "src",
          exports: "named",
          dir: "./dist/lib",
        },
      ],
    },
  },
  plugins: [
    vue(),
    libInjectCss(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      insertTypesEntry: true,
      copyDtsFiles: false,
      include: ["src/**/*"],
    }),
  ],
});
