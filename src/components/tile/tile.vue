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
    <WinReveal />
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
import WinReveal from "../reveal";
import "./style.scss";

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
