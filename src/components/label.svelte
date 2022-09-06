<script lang="ts">
  import type { LabelType } from "../types/label.svelte";
  import { draggable } from "svelte-drag";
  export let label: LabelType;
</script>

<div
  use:draggable={{
    defaultPosition: { x: label.position.x, y: label.position.y },
  }}
  class="list-none bg-gray-100 text-gray-800 
  rounded-sm shadow-md active:shadow-xl flex flex-col
  items-center justify-start m-3 w-80 p-4"
>
  <h1 class="text-1.5x1 text-left"><b>{label.title}</b></h1>
  <h2 class="text-1x1 my-1 mx-3 text-left">{label.description}</h2>
</div>
