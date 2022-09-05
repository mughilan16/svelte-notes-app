<script lang="ts">
  // Types
  import type { Todo } from "../types/todo.svelte";
  // Components
  import NavBar from "../components/NavBar.svelte";
  import TodoCard from "../components/TodoCard.svelte";

  let myTodo: Todo = {
    message: "Complete Todo App",
    checked: false,
    description: "Finish the svelte todo app with typescript",
    priority: 1,
    position: {x: 0, y: 0}
  };
  $: Elements = [
    [myTodo]
  ]
</script>

<NavBar />
<div class="flex flex-row w-full h-full justify-center">
  <div
    class=" overflow-hidden rounded bg-white
    shadow-md ring-1 ring-black ring-opacity-5 h-full w-full p-5"
  >
    {#each Elements[0] as myTodo}
      <TodoCard myTodo={myTodo} />
    {/each}
  </div>
</div>
