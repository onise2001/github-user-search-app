/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "input-shadow": "0 16px 30px -10px rgba(70, 96, 187, 0.2)",
      },
    },
  },
  plugins: [],
};
