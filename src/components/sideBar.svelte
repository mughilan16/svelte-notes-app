<script>
  import { text } from "svelte/internal";

  const iconClass = "fa text-2xl text-gray-700 font-thin";
  const textClass = "text-xs text-center text-gray-700 font-thin";
</script>

<nav class="w-20 p-2 shadow-xl drop-shadow-lg h-screen">
  <button class="w-full">
    <div class="my-4 mx-0">
      <i class="fa-sticky-note-o {iconClass}" aria-hidden="true" />
      <p class={textClass}>Note</p>
    </div>
    <div class="my-4 mx-0">
      <i class="fa-check-square-o  {iconClass}" aria-hidden="true" />
      <p class={textClass}>Todo</p>
    </div>
    <div class="my-4 mx-0">
      <i class="fa-image {iconClass}" aria-hidden="true" />
      <p class={textClass}>Image</p>
    </div>
  </button>
</nav>
