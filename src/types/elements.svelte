<script lang="ts" context="module">
  import type { CheckboxType } from "./checkbox.svelte";
  import type { ImageType } from "./image.svelte";
  import type { LabelType } from "./label.svelte";

  export type ElementType = {
    checkboxes: CheckboxType[];
    images: ImageType[];
    labels: LabelType[];
  };
</script>
