<script lang="ts">
  // Components
  import NavBar from "../components/NavBar.svelte";
  import SideBar from "../components/sideBar.svelte";
  // Elements
  import Checkbox from "../components/checkbox.svelte";
  import Image from "../components/image.svelte";
  import Label from "../components/label.svelte";
  import type { ImageType } from "src/types/image";
  // Test
  import { Elements } from "../stores/elements";
  let myImages: ImageType = {
    src: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/WHAT-IS-WEB-DESIGN.jpg?auto=format&q=60&w=1860&h=1046.25&fit=crop&crop=faces",
    alt: "My Image",
    position: { x: 0, y: 0 },
  };
  Elements.set({
    checkboxes: [],
    images: [myImages],
    labels: [],
  });
</script>

<NavBar />
<div class="flex flex-row">
  <SideBar />
  <div class="flex flex-row w-full h-screen justify-center bg-canvas">
    <div
      class="overflow-hidden rounded shadow-md ring-1
       ring-black ring-opacity-5 h-full w-full p-5"
    >
      {#each $Elements.images as image}
        <Image {image} />
      {/each}
      {#each $Elements.checkboxes as checkbox}
        <Checkbox {checkbox} />
      {/each}
      {#each $Elements.labels as label}
        <Label {label} />
      {/each}
    </div>
  </div>
</div>
