/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./../**/*.svelte"],
  theme: {
    extend: {
      backgroundImage: {
        'canvas' : "url('https://i.pinimg.com/736x/a9/aa/3e/a9aa3e2c5bd14630a6c43dc4c12f71d5.jpg')"
      }
    }
  }
};
