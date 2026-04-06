import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    pluginJs.configs.recommended,

    {
        ignores: [
            "dist/",
            "node_modules/",
            ".*rc.js",
            "*.config.js",
            "*.css",
            "*.pcss",
            "*.scss",
            "*.json"
        ]
    },

    {
        languageOptions: {
            globals: globals.browser
        }
    }
];