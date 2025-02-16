import daisyui from "daisyui";
export default {
  //...
  plugins: [daisyui, require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
