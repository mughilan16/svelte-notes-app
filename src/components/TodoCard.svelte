<script lang="ts">
  import type { Todo } from "";
  export let myTodo: Todo;
</script>

<div
  class="list-none p-6 bg-gray-100 text-gray-800 
  text-center rounded-md shadow-sm hover:shadow-md 
  flex flex-row items-center"
>
  <button
    class="list-none p-6 text-gray-50 text-center 
      rounded-md hover:shadow-md">{"<"}</button
  >
  <div>
    <h1 class="text-3xl my-2">{myTodo.message}</h1>
    <h1 class="text-1xl">{myTodo.description}</h1>
  </div>
  <button>{">"}</button>
</div>
