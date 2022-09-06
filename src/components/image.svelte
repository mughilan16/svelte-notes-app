<script lang="ts">
  import type { ImageType } from "../types/image";
  import { draggable } from "svelte-drag";
  export let image: ImageType;
</script>

<div
  use:draggable
  class="flex w-80 
    drop-shadow-xl active:drop-shadow-2xl shadow-black flex-row
    items-center justify-start"
>
  <img src={image.src} alt={image.alt} />
</div>
