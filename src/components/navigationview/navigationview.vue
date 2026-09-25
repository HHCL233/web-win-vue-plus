<template>
  <div class="win-navigation-view">
    <div
      class="navigation"
      :style="{
        '--width': `${isUnfold ? 320 : 42}px`,
      }"
    >
      <div class="items-menu">
        <div class="navigation-item" @click="isUnfold = !isUnfold">
          <Icon
            icon="fluent-mdl2:global-nav-button"
            width="16"
            class="icon-nav"
          />
        </div>
      </div>
      <div class="items-other">
        <div
          class="select-item-line"
          ref="tip-line"
          :style="{
            '--lineTop': `${currentSelect * 40 - 20}px`,
          }"
        ></div>
        <WinNavigationViewItem
          v-for="(item, index) in props.options"
          @click="select(index + 1)"
          :icon="item.icon ?? ''"
          :label="item.label ?? ''"
          :is-fold="!isUnfold"
        ></WinNavigationViewItem>
      </div>
    </div>
    <div class="navigation-space"></div>
    <div class="page"><slot name="content"></slot></div>
  </div>
</template>
<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import "./style.scss";
import { ref, useTemplateRef } from "vue";
import { WinNavigationViewItem } from "../navigationviewitem";

defineOptions({ name: "WinNavigationView" });

interface ItemOption {
  icon: string;
  label: string;
}

const isUnfold = ref(false);
const currentSelect = ref(1);
const lineRef = useTemplateRef("tip-line");
const props = defineProps<{
  options: ItemOption[];
}>();

const select = (id: number) => {
  if (!lineRef.value) return;
  currentSelect.value = id;
};
</script>
