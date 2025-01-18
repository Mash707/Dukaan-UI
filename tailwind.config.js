/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "button-grey": "#e6e6e6",
        "button-blue": "#146eb4",
        "custom-white": "#fafafa",
        "table-header": "#4d4d4d",
        "sidebar-blue": "#1e2640",
      },
    },
  },
  plugins: [],
};
