/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./../**/*.svelte"],
  theme: {
    extend: {
      backgroundImage: {
        'canvas' : "url('https://t3.ftcdn.net/jpg/03/41/31/80/360_F_341318068_0SzEc9byllL4XCZHnrsl4dAnIRagjDta.jpg')"
      }
    }
  }
};
