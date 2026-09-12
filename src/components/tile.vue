<template>
  <button
    class="win-tile"
    ref="tile"
    type="button"
    @pointermove="pointermove"
    @pointerleave="pointerleave"
    @pointerenter="pointerenter"
    :class="{ 'tip-show': tipShow }"
  >
    <highlight />
    <div class="border"></div>
    <div class="card">
      <div class="content" :class="{ 'is-dynamic': props.showDynamic }">
        <slot name="content"></slot>
      </div>
      <div class="dynamic" :class="{ show: props.showDynamic }">
        <slot name="dynamic"></slot>
      </div>
    </div>
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { ref, useTemplateRef } from "vue";
import Highlight from "./highlight.vue";

defineOptions({ name: "WinTile" });
const props = defineProps({
  showDynamic: {
    type: Boolean,
  },
});

const tileRef = useTemplateRef("tile");
const mouseXNumber = ref(0);
const mouseYNumber = ref(0);
const tipShow = ref(false);

const pointermove = (event: PointerEvent) => {
  if (!tileRef.value) return;
  const rect = tileRef.value.getBoundingClientRect();
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  mouseXNumber.value = mouseX - rect.left;
  mouseYNumber.value = mouseY - rect.top;
};

const pointerleave = () => {
  tipShow.value = false;
};

const pointerenter = () => {
  tipShow.value = true;
};
</script>
<style lang="scss" scoped>
.win-tile {
  z-index: 0;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  overflow: hidden;
  box-sizing: border-box;
  appearance: none;
  border: none;
  transition: transform 100ms ease-out;
  background-color: var(--w-tile-default-bg);
  &:active {
    transform: scale(0.95);
  }
  .card {
    position: absolute;
    top: 0;
    left: 0;
    height: 150px;
    width: 150px;
    overflow: hidden;
  }
  .content {
    color: white;
    user-select: none;
    position: absolute;
    top: 0;
    left: 0;
    height: 150px;
    width: 150px;
    box-sizing: border-box;
    background-color: var(--w-tile-default-bg);
    pointer-events: none;
    transition: top 0.75s cubic-bezier(0.35, 0.01, 0.25, 1);
    padding: 6px;
    &.is-dynamic {
      top: -150px;
    }
  }
  &.tip-show {
    &::before {
      opacity: 1;
    }
  }
  .dynamic {
    color: white;
    user-select: none;
    content: "";
    position: absolute;
    top: 150px;
    left: 0;
    width: 150px;
    height: 150px;
    background: red;
    box-sizing: border-box;
    transition: top 0.75s cubic-bezier(0.35, 0.01, 0.25, 1);
    padding: 6px;
    &.show {
      top: 0px;
    }
  }
  &.show::after {
    opacity: 1;
  }
}
</style>
