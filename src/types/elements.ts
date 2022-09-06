import type { CheckboxType } from "./checkbox";
import type { ImageType } from "./image";
import type { LabelType } from "./label";

export type ElementType = {
  checkboxes: CheckboxType[];
  images: ImageType[];
  labels: LabelType[];
};
