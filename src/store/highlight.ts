import { ref } from "vue";

export let highlightPostion = ref([0, 0]);
let isInitEvent = false;

export function initEvent() {
  if (isInitEvent) return;
  document.addEventListener("pointermove", (event) => {
    highlightPostion.value[0] = event.clientX;
    highlightPostion.value[1] = event.clientY;
  });
  isInitEvent = true;
}
