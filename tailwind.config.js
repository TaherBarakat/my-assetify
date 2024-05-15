/** @type {import('tailwindcss').Config} */
export default {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
          extend: {
               colors: {
                    primary: {
                         light: "#F2F4F6",
                         lighter: "#FFFFFF",
                         dark: "#161D6F",
                         darker: "#0A0E3F",
                    },
                    secondary: { DEFAULT: "#6B48FF", accent: "#1EE3CF" },
               },

               fontFamily: {
                    noor: ["NOOR"],
               },
          },
     },
     plugins: [],
};
