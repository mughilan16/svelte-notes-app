<script lang="ts" context="module">
  import type { CheckboxType } from "../types/checkbox.svelte";
  import type { ImageType } from "../types/image.svelte";
  import type { ElementType } from "../types/elements.svelte";
  import type { LabelType } from "../types/label.svelte";
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
  let myImages: ImageType = {
    src: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/WHAT-IS-WEB-DESIGN.jpg?auto=format&q=60&w=1860&h=1046.25&fit=crop&crop=faces",
    alt: "My Image",
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
  export let Elements: ElementType = {
    checkboxes: [myCheckboxes, myCheckboxes2, myCheckboxes3],
    images: [myImages, myImages2],
    labels: [myLabel, myLabel2],
  };
</script>
