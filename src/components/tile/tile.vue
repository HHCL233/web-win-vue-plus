<template>
  <WinBaseButton
    class="win-tile"
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
  </WinBaseButton>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import WinReveal from "../reveal";
import "./style.scss";
import WinBaseButton from "../basebutton";

defineOptions({ name: "WinTile" });
const props = defineProps({
  showDynamic: {
    type: Boolean,
  },
});

const tipShow = ref(false);

const pointerleave = () => {
  tipShow.value = false;
};

const pointerenter = () => {
  tipShow.value = true;
};
</script>
