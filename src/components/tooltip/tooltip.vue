<template>
  <div
    class="win-tooltip"
    :class="{
      'show-tooltip': showTooltip,
    }"
    :style="{
      '--mouseX': `${mousePosition[0]}px`,
      '--mouseY': `${mousePosition[1]}px`,
      '--content': JSON.stringify(props.content ?? ''),
    }"
    @pointerenter="onPointerenter"
    @pointerleave="onPointerleave"
    @pointermove="onPointermove"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import "./style.scss";
import { sleep } from "../../utils/time";

defineOptions({ name: "WinToolTip" });

const props = defineProps({
  content: {
    type: String,
    required: false,
  },
});
const showTooltip = ref(false);
const mousePosition = ref([0, 0]);
let tempMousePosition = [0, 0];
let startUpdateShow = false;

const onPointerenter = async () => {
  startUpdateShow = true;
  await sleep(1000);
  if (!startUpdateShow) return;
  mousePosition.value = tempMousePosition;
  showTooltip.value = true;
};

const onPointermove = (event: PointerEvent) => {
  tempMousePosition = [event.clientX, event.clientY];
};

const onPointerleave = () => {
  startUpdateShow = false;
  showTooltip.value = false;
};
</script>
