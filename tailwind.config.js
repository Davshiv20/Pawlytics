import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Add the Neucha font family with cursive fallback
        neucha: ["Neucha", "cursive"],
      },
    },
  },
  plugins: [],
});
