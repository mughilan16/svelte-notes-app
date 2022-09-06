<script lang="ts">
  // Components
  import NavBar from "../components/NavBar.svelte";
  import SideBar from "../components/sideBar.svelte";
  // Elements
  import Checkbox from "../components/checkbox.svelte";
  import Image from "../components/image.svelte";
  import Label from "../components/label.svelte";
  // Test
  import { Elements } from "./test.svelte";
</script>

<NavBar />
<div class="flex flex-row">
  <SideBar />
  <div class="flex flex-row w-full h-full justify-center bg-canvas">
    <div
      class="overflow-hidden rounded shadow-md ring-1
       ring-black ring-opacity-5 h-full w-full p-5"
    >
      {#each Elements.images as image}
        <Image {image} />
      {/each}
      {#each Elements.checkboxes as checkbox}
        <Checkbox {checkbox} />
      {/each}
      {#each Elements.labels as label}
        <Label {label} />
      {/each}
    </div>
  </div>
</div>
