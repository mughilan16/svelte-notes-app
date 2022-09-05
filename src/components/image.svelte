<script lang="ts">
  import type { ImageType } from "../types/image.svelte";
  import { draggable } from "svelte-drag";
  export let image: ImageType;
</script>

<div
  use:draggable
  class="flex w-80 
    shadow-md active:shadow-lg flex-row
    items-center justify-start"
>
  <img class="rounded-md" src={image.src} alt={image.alt} />
</div>
