// Importing Type
import type { CheckboxType } from "../types/checkbox";
import type { ImageType } from "../types/image";
import type { ElementType } from "../types/elements";
import type { LabelType } from "../types/label";

import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

let myCheckboxes: CheckboxType = {
  message: "Complete Todo App",
  checked: false,
  position: { x: 0, y: 0 },
};
let myCheckboxes2: CheckboxType = {
  message: "Build Basic Components",
  checked: false,
  position: { x: 0, y: 0 },
};
let myCheckboxes3: CheckboxType = {
  message: "Implement Lifecycle",
  checked: false,
  position: { x: 0, y: 0 },
};
let myImages2: ImageType = {
  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94X4IxUvIkzHC8KWamgr83Cv27TiOqGmHOg&usqp=CAUs",
  alt: "My Image",
  position: { x: 0, y: 0 },
};
let myLabel: LabelType = {
  title: "Svelte notes app",
  description: `This notes app made with svelte, 
    svelte-kit, and typescript. This is my first svelte
    app.`,
  position: { x: 0, y: 0 },
};
let myLabel2: LabelType = {
  title: "TypeScript",
  description: `This project use typescript with svelte. TypeScript
    is helpful for finding bugs in types.`,
  position: { x: 0, y: 0 },
};
export let Elements: Writable<ElementType> = writable({
  checkboxes: [myCheckboxes, myCheckboxes2, myCheckboxes3],
  images: [myImages2],
  labels: [myLabel, myLabel2],
});

// export const Elements: Writable<ElementType> = writable({
//   checkboxes: [],
//   images: [],
//   labels: [],
// });
