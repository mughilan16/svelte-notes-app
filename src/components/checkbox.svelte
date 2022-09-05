<script lang="ts">
  import type { CheckboxType } from "../types/checkbox.svelte";
  import { draggable } from "svelte-drag";
  export let checkbox: CheckboxType;
  const toggleCheckbox = () => {
    checkbox.checked = !checkbox.checked;
  };
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<div
  use:draggable={{
    defaultPosition: { x: checkbox.position.x, y: checkbox.position.y },
  }}
  class="list-none bg-gray-100 text-gray-800 
  rounded-sm shadow-md active:shadow-lg flex flex-row
  items-center justify-start m-3 w-60"
>
  <button
    on:click={toggleCheckbox}
    class="flex items-center justify-center
    rounded-sm border border-transparent 
    px-0 py-5 text-base font-medium text-white
    md:py-1 md:px-1 md:text-lg mr-1 ml-2"
  >
    {#if checkbox.checked}
      <i class="fa fa-check-square text-indigo-600" aria-hidden="true" />
    {:else}
      <i class="fa fa-square text-gray-300" aria-hidden="true" />
    {/if}
  </button>
  <h1
    class="text-1xl my-2 text-center
    {checkbox.checked === true ? 'todo-checked' : ''}"
  >
    {checkbox.message}
  </h1>
</div>

<style>
  .todo-checked {
    text-decoration: line-through;
  }
</style>
