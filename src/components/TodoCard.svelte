<script lang="ts">
  import type { Todo } from "../types/todo.svelte";
  import { draggable } from "svelte-drag";
  export let myTodo: Todo;
  const checkedButtonClick = () => {
    myTodo.checked = !myTodo.checked;
    console.log(myTodo.checked);
  };
</script>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>
<div
  use:draggable={{ defaultPosition: {x: myTodo.position.x, y: myTodo.position.y}}}
  class="list-none bg-gray-100 text-gray-800 
  rounded-md shadow-md active:shadow-lg flex flex-row
  items-center justify-start m-3 w-60"
>
  <button
    on:click={checkedButtonClick}
    class="flex items-center justify-center
    rounded-md border border-transparent 
    px-0 py-5 text-base font-medium text-white
    md:py-1 md:px-1 md:text-lg mr-1 ml-2"
  >
    {#if myTodo.checked}
      <i class="fa fa-check-square text-indigo-600" aria-hidden="true" />
    {:else}
      <i class="fa fa-square text-gray-300" aria-hidden="true" />
    {/if}
  </button>
  <h1 class="text-1xl my-2 text-center
    {myTodo.checked === true ? 'todo-checked' : ''}">{myTodo.message}</h1>
</div>

<style>
  .todo-checked {
    text-decoration: line-through;
  }
</style>
