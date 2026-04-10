import js from "@eslint/js";
import globals from "globals";
import react from "@eslint-react/eslint-plugin";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig(
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js: js, react: react },
    extends: [
      js.configs.recommended,
      react.configs.recommended,
      react.configs.jsx,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
    rules: {
      "css/no-invalid-at-rules": "off",
    },
  },
);
