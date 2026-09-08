<template>
  <div class="win-slider">
    <div
      class="visual-track"
      @pointerdown="onPointerDown"
      @pointermove="onPointerMove"
      @pointerup="onPointerUp"
      ref="slider"
    >
      <div class="visual-fill"></div>
      <div class="visual-thumb"></div>
    </div>
  </div>
  <p>{{ value }}</p>
</template>

<script lang="ts" setup>
import { computed, ref, useTemplateRef, watch, onMounted } from "vue";
import { getDecimalPlaces } from "../utils/decimal";

defineOptions({ name: "WinSlider" });

const props = defineProps({
  max: {
    type: Number,
    default: 100,
  },
  min: {
    type: Number,
    default: 0,
  },
  step: {
    type: Number,
    default: 0.1,
  },
});

const value = defineModel<number>({ default: 0 });

const element = useTemplateRef<HTMLDivElement>("slider");
const sliderProgress = ref(props.min);
const isDragging = ref(false);

// 根据value更新进度百分比
function updateProgressFromValue(val: number) {
  const fraction = (val - props.min) / (props.max - props.min);
  sliderProgress.value = Math.min(Math.max(fraction * 100, 0), 100);
}

// 根据鼠标/指针位置设置新值
const setProgress = (event: MouseEvent | PointerEvent) => {
  if (!element.value) return;
  const rect = element.value.getBoundingClientRect();

  // 百分比
  let fraction = (event.clientX - rect.left) / rect.width;
  fraction = Math.min(Math.max(fraction, 0), 1);

  const rawValue = props.min + fraction * (props.max - props.min);
  let steppedValue = Math.round(rawValue / props.step) * props.step;
  steppedValue = Math.min(Math.max(steppedValue, props.min), props.max);
  steppedValue = Number(steppedValue.toFixed(getDecimalPlaces(props.step)));

  value.value = steppedValue;
};

// 指针按下
const onPointerDown = (event: PointerEvent) => {
  if (!element.value) return;
  element.value.setPointerCapture(event.pointerId);
  isDragging.value = true;
  setProgress(event);
};

// 指针移动
const onPointerMove = (event: PointerEvent) => {
  if (isDragging.value && element.value) {
    setProgress(event);
  }
};

// 指针抬起：结束拖动
const onPointerUp = (event: PointerEvent) => {
  if (!element.value) return;
  element.value.releasePointerCapture(event.pointerId);
  isDragging.value = false;
};

// 监听value变化
watch(
  () => value.value,
  (newVal) => {
    updateProgressFromValue(newVal);
  },
  { immediate: true },
);

onMounted(() => {
  updateProgressFromValue(value.value);
});

const fillWidth = computed(() => `${sliderProgress.value}%`);
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
    user-select: none;
    .visual-fill {
      width: v-bind(fillWidth);
      height: 100%;
      background-color: var(--w-slider-default-slider-left);
    }
    .visual-thumb {
      position: absolute;
      left: v-bind(fillWidth);
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
