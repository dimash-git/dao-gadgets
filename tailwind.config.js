import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            backgroundColor: {
                "app-gray": "#9faec0",
                "app-lightgray": "#f2f5f9",
            },
            colors: {
                "app-gray": "#9faec0",
                "app-lightgray": "#f2f5f9",
            },
            boxShadow: {
                "app-blue": "0px 5px 16px 0px rgba(50, 132, 229, 0.16)",
            },
            // minHeight: {
            //     "w-nav": "calc(100% + 80px)",
            // },
        },
    },

    plugins: [forms],
};
