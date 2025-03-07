import eslint from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";

export default [
  eslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    ignores: ["dist/"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
      },
    },
  },
];
