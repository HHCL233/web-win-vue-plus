<template>
  <div
    class="win-basebutton"
    @pointerdown="pointerdown"
    @keydown="keydown"
    ref="basebutton"
    type="basebutton"
    tabindex="0"
    :style="{
      '--rotateY': rotateY,
      '--rotateX': rotateX,
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, useTemplateRef } from "vue";
import "./style.scss";

defineOptions({ name: "WinButton" });

const rotateYNumber = ref(0);
const rotateXNumber = ref(0);
const rotateY = computed(() => `${rotateYNumber.value}deg`);
const rotateX = computed(() => `${rotateXNumber.value}deg`);
const element = useTemplateRef("basebutton");

const pointerdown = (event: PointerEvent) => {
  if (!element.value) return;
  const rect = element.value.getBoundingClientRect();
  const mouseX = event.clientX - rect.left - rect.width / 2;
  const mouseY = event.clientY - rect.top - rect.height / 2;
  rotateYNumber.value = mouseX * 0.35;
  rotateXNumber.value = -mouseY * 0.35;
};

const keydown = () => {
  rotateXNumber.value = 0;
  rotateYNumber.value = 0;
};
</script>
