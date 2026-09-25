<template>
  <div
    class="win-navigation-item"
    :class="{
      fold: isFold,
    }"
  >
    <Icon :icon="props.icon" width="16" class="icon" />
    <span class="label">{{ props.label }}</span>
    <WinReveal class="reveal" />
  </div>
</template>
<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import "./style.scss";
import { WinReveal } from "../reveal";

defineOptions({ name: "WinNavigationViewItem" });
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  isFold: {
    type: Boolean,
    required: true,
  },
});
</script>
