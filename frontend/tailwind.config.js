module.exports = {
  purge: [
    "./build/*.html",
    "./public/index.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {},
  },
  plugins: [],
};
