<script lang="ts">
  import type { Todo } from "../types/todo.svelte";
  export let myTodo: Todo;
</script>

<div
  class="list-none p-6 bg-gray-100 text-gray-800 
  text-center rounded-md shadow-sm hover:shadow-md 
  flex flex-row items-center"
>
  <button
    class="flex items-center justify-center
    rounded-md border border-transparent bg-indigo-600
    px-0 py-3 text-base font-medium text-white hover:bg-indigo-700
    md:py-4 md:px-8 md:text-lg">{"<"}</button
  >
  <div>
    <h1 class="text-3xl my-2">{myTodo.message}</h1>
    <h1 class="text-1xl">{myTodo.description}</h1>
  </div>

  <button
    class="flex items-center justify-center
    rounded-md border border-transparent bg-indigo-600
    px-0 py-3 text-base font-medium text-white hover:bg-indigo-700
    md:py-4 md:px-8 md:text-lg">{">"}</button>
</div>
