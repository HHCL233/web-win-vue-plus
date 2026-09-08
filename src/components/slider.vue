<template>
  <div class="win-slider">
    <div class="visual-track">
      <div class="visual-fill"></div>
      <div class="visual-thumb"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "WinSlider",
});
</script>
<script lang="ts" setup>
const model = defineModel();
</script>
<style lang="scss" scoped>
.win-slider {
  width: 600px;
  position: relative;
  margin: 12px 0;
  .visual-track {
    width: 100%;
    height: 6px;
    background-color: var(--w-slider-default-slider-right);
    .visual-fill {
      width: 30%;
      height: 100%;
      background-color: var(--w-slider-default-slider-left);
    }
    .visual-thumb {
      position: absolute;
      left: 30%;
      top: 50%;
      transform: translateY(-50%);
      height: 26px;
      width: 6px;
      background-color: var(--w-slider-default-thumb);
      border-radius: 8px;
    }
  }
}

.win-slider[type="range"]::-webkit-slider-thumb {
  height: var(--s);
  height: 24px;
  width: 6px;
  border-radius: 9999px;
  background-color: var(--w-slider-default-thumb);
  border-image: linear-gradient(
      90deg,
      var(--w-slider-default-slider-left) 50%,
      var(--w-slider-default-slider-right) 0
    )
    0 1 / calc(50% - 1px) 100vw/0 calc(100vw + 0px);
  -webkit-appearance: none;
  appearance: none;
}

.win-slider[type="range"]::-webkit-slider-thumb:active {
  background-color: var(--w-slider-default-thumb-active);
}

.win-slider[type="range"]::-moz-range-thumb {
  height: 12px;
  height: 24px;
  width: 6px;
  border-radius: 50%;
  background-color: red;
  border: none;
  appearance: none;
}

.win-slider[type="range"]::-moz-range-progress {
  background: var(--w-slider-default-slider-left);
  border: none;
  height: 4px;
}

.win-slider[type="range"]::-moz-range-track {
  height: 4px;
  background: var(--w-slider-default-slider-right);
  border: none;
  border-radius: 2px;
}

.win-slider[type="range"]::-moz-range-thumb:active {
  background-color: var(--w-slider-default-thumb-active);
}
</style>
