<template>
  <button
    class="win-button"
    @pointerdown="pointerdown"
    @keydown="keydown"
    ref="button"
    type="button"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { computed, ref, useTemplateRef } from "vue";

defineOptions({ name: "WinButton" });

const rotateYNumber = ref(0);
const rotateXNumber = ref(0);
const rotateY = computed(() => `${rotateYNumber.value}deg`);
const rotateX = computed(() => `${rotateXNumber.value}deg`);
const element = useTemplateRef("button");

const pointerdown = (event: PointerEvent) => {
  if (!element.value) return;
  const rect = element.value.getBoundingClientRect();
  const mouseX = event.clientX - rect.left - rect.width / 2;
  const mouseY = event.clientY - rect.top - rect.height / 2;
  rotateYNumber.value = mouseX * 0.5;
  rotateXNumber.value = -mouseY * 1.5;
};

const keydown = () => {
  rotateXNumber.value = 0;
  rotateYNumber.value = 0;
};
</script>
<style lang="scss" scoped>
.win-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 0 16px;
  color: var(--w-button-default-text);
  background-color: var(--w-button-default-bg);
  border: 3px solid transparent;
  outline-offset: -3px;
  outline: 0;
  transition: ease-out 100ms transform;
  transform-origin: center;
  user-select: none;
}

.win-button:hover {
  border: 3px solid var(--w-button-default-hover-border);
  outline-offset: -3px;
}

.win-button:focus-visible {
  border: 3px solid var(--w-button-default-hover-border);
  outline-offset: -3px;
}

.win-button:active {
  border: 3px solid transparent;
  outline-offset: -3px;
  background-color: var(--w-button-default-active-bg);
  transform: perspective(800px) rotateY(v-bind(rotateY))
    rotateX(v-bind(rotateX)) scale(0.95);
}
</style>
