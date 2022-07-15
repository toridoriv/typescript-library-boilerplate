/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:sort/recommended",
    "prettier",
  ],
  ignorePatterns: ["node_modules**", ".tmp/**"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "sort", "json-format", "prettier"],
  root: true,
  rules: {
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/no-var-requires": "warn",
    "curly": ["error", "multi", "consistent"],
    "no-empty": "warn",
    "no-var": "warn",
    "prettier/prettier": [
      "error",
      {
        bracketSpacing: true,
        endOfLine: "lf",
        printWidth: 80,
        quoteProps: "consistent",
        semi: true,
        trailingComma: "es5",
      },
    ],
    "sort/type-properties": "error",
  },
};
