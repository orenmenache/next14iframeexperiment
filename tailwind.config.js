/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
   darkMode: "class", // or 'media' for media-query based dark mode
   content: [
      "./node_modules/flowbite-react/lib/**/*.js",
      "./pages/**/*.{ts,tsx}",
      "./public/**/*.html",
   ],
   plugins: [require("flowbite/plugin")],
   theme: {},
};
