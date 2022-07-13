import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";

const { main, module, typings } = require("./package.json");

/** @type {import("rollup-plugin-esbuild").Options} */
const esbuildConfig = {
  exclude: [/\.test.ts?$/, /node_modules/],
  target: "node18",
  tsconfig: "./tsconfig.json",
};

const libBundle = {
  input: "src/index.ts",
  output: [
    {
      file: main,
      format: "cjs",
      sourcemap: false,
    },
    {
      file: module,
      format: "esm",
      sourcemap: false,
    },
  ],
  plugins: [esbuild(esbuildConfig)],
};

const typingsBundle = {
  input: "src/index.ts",
  output: {
    file: typings,
    format: "esm",
    sourcemap: false,
  },
  plugins: [dts()],
};

export default [libBundle, typingsBundle];
