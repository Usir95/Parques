import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        extend: {
        fontFamily: {
            sans: ["Figtree", ...defaultTheme.fontFamily.sans],
        },
        screens: {
            hd: "1920px",
            lp: "1366px",
        },

        colors: {
            primary: "var(--color-app-primary)",
            secondary: "var(--color-app-secondary)",
            tertiary: "var(--color-app-tertiary)",

            complement1: "var(--color-app-accent-1)",
            complement2: "var(--color-app-accent-2)",

            surface: "var(--color-app-surface)",
            muted: "var(--color-app-muted)",
            dark: "var(--color-app-dark)",

        },

        fontSize: {
            mxs: "0.666rem",
            xxs: "0.565rem",
            53: "15rem",
        },
        },
    },

    plugins: [forms, typography],
};
