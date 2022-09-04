<script lang="ts">
  import type { Todo } from "../types/todo.svelte";
  import TodoCard from "../components/TodoCard.svelte";
  let myTodo: Todo = {
    message: "Complete Todo App",
    state: "DOING",
    description: "Finish the svelte todo app with typescript",
    priority: 1,
  };
</script>

<div class="p-8 flex flex-row w-full justify-items-center">
  <div class="mr-10">
    <h1 class="text-4xl text-center m-5">TODO</h1>
    <TodoCard {myTodo} />
  </div>
  <div class="mr-10">
    <h1 class="text-4xl text-center m-5">DOING</h1>
    <TodoCard {myTodo} />
  </div>
  <div>
    <h1 class="text-4xl text-center m-5">DONE</h1>
    <TodoCard {myTodo} />
  </div>
</div>

