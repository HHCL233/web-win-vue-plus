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
      <div class="items-other" ref="items">
        <div
          class="select-item-line"
          ref="tip-line"
          :style="{
            '--lineTop': `${(itemPosition[currentSelect]?.[1] ?? 0) + 20}px`,
          }"
        ></div>
        <div class="top-items">
          <WinNavigationViewItem
            v-for="item in props.options"
            @click="select(item.key)"
            :key="item.key"
            @vue:mounted="(vnode) => itemMounted(vnode.el, item.key)"
            @vue:unmounted="itemUnMounted(item.key)"
            :icon="item.icon ?? ''"
            :label="item.label ?? ''"
            :is-fold="!isUnfold"
          ></WinNavigationViewItem>
        </div>
        <div class="bottom-items">
          <WinNavigationViewItem
            v-for="item in props.endOptions ?? []"
            @click="select(item.key)"
            :key="item.key"
            @vue:mounted="(vnode) => itemMounted(vnode.el, item.key)"
            @vue:unmounted="itemUnMounted(item.key)"
            :icon="item.icon ?? ''"
            :label="item.label ?? ''"
            :is-fold="!isUnfold"
          ></WinNavigationViewItem>
        </div>
      </div>
    </div>
    <div class="navigation-space"></div>
    <div class="page"><slot name="content"></slot></div>
  </div>
</template>
<script lang="ts" setup>
import { Icon } from "@iconify/vue";
import "./style.scss";
import { ref, useTemplateRef, type RendererNode } from "vue";
import { WinNavigationViewItem } from "../navigationviewitem";

defineOptions({ name: "WinNavigationView" });

interface ItemOption {
  icon: string;
  label: string;
  key: string;
}

const isUnfold = ref(false);
const currentSelect = ref("");
const itemsRef = useTemplateRef("items");
const lineRef = useTemplateRef("tip-line");
const itemPosition = ref<Record<string, [number, number]>>({});
const props = defineProps<{
  options: ItemOption[];
  endOptions?: ItemOption[];
}>();
const emit = defineEmits<{
  change: [key: string];
}>();

const select = (key: string) => {
  if (!lineRef.value) return;
  currentSelect.value = key;
  emit("change", key);
  isUnfold.value = false;
};

const itemMounted = (el: RendererNode | null, key: string) => {
  if (el instanceof HTMLElement && !!itemsRef.value) {
    const rect = el.getBoundingClientRect();
    const viewRect = itemsRef.value.getBoundingClientRect();
    itemPosition.value[key] = [
      rect.left - viewRect.left,
      rect.top - viewRect.top,
    ];
  }
};

const itemUnMounted = (key: string) => {
  Reflect.deleteProperty(itemPosition.value, key);
};
</script>
