<script lang="ts" context='module'>
  export type Todo = {
    message: string;
    state: "TODO" | "DOING" | "DONE";
    description: string;
    priority: 1 | 2 | 3 | 4 | 5 | 6;
  };
</script>
