<script lang="ts" context="module">
  export type Todo = {
    message: string;
    checked: boolean;
    description: string;
    priority: 1 | 2 | 3 | 4 | 5 | 6;
    position: { x: number; y: number };
  };
</script>
