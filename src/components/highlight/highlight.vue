<template>
  <div
    class="highlight-shell"
    :style="{
      '--highlightBorderX': highlightBorderX,
      '--highlightBorderY': highlightBorderY,
      '--highlightX': highlightX,
      '--highlightY': highlightY,
    }"
  >
    <div class="highlight-border" ref="highlightBorder"></div>
    <div class="highlight" ref="highlight"></div>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, useTemplateRef } from "vue";
import { highlightPostion, initEvent } from "../../store/highlight";
import "./style.scss";

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
