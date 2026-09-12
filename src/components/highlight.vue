<template>
  <div class="highlight-shell">
    <div class="highlight-border" ref="highlightBorder"></div>
    <div class="highlight" ref="highlight"></div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, useTemplateRef } from "vue";
import { highlightPostion, initEvent } from "../store/highlight";

defineOptions({ name: "WinHighlight" });

const highlightBorderRef = useTemplateRef("highlightBorder");
const highlightBorderX = computed(() => {
  if (!highlightBorderRef.value) return 0;
  const rect = highlightBorderRef.value.getBoundingClientRect();
  return `${highlightPostion.value[0] - rect.left}px`;
});
const highlightBorderY = computed(() => {
  if (!highlightBorderRef.value) return 0;
  const rect = highlightBorderRef.value.getBoundingClientRect();
  return `${highlightPostion.value[1] - rect.top}px`;
});

const highlightRef = useTemplateRef("highlight");
const highlightX = computed(() => {
  if (!highlightRef.value) return 0;
  const rect = highlightRef.value.getBoundingClientRect();
  return `${highlightPostion.value[0] - rect.left}px`;
});
const highlightY = computed(() => {
  if (!highlightRef.value) return 0;
  const rect = highlightRef.value.getBoundingClientRect();
  return `${highlightPostion.value[1] - rect.top}px`;
});

onMounted(() => {
  initEvent();
});
</script>
<style lang="scss" scoped>
.highlight-shell {
  z-index: 1;
  position: absolute;
  height: 150px;
  width: 150px;
  overflow: hidden;
}

.highlight-border {
  z-index: 1;
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 4px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background: radial-gradient(
    150px circle at v-bind(highlightBorderX) v-bind(highlightBorderY),
    var(--w-tile-default-hover-border),
    transparent 70%
  );
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
}
.highlight {
  z-index: 1;
  height: 100%;
  width: 100%;
  pointer-events: none;
  background: radial-gradient(
    100px circle at v-bind(highlightX) v-bind(highlightY),
    var(--w-tile-default-hover-highlight),
    transparent 100%
  );
}
</style>
