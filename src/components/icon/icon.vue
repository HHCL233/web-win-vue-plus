<template>
  <component
    v-if="IconComponent"
    :is="IconComponent"
    :icon="icon"
    :width="width"
  />
</template>

<script lang="ts" setup>
import { ref, markRaw } from "vue";
import { onMounted } from "vue";
const IconComponent = ref<any>(null);
defineOptions({ name: "WinIcon" });
const props = defineProps<{
  icon: string;
  width: number;
}>();

onMounted(async () => {
  try {
    // 动态导入
    const { Icon } = await import("@iconify/vue");
    IconComponent.value = markRaw(Icon);
  } catch {
    console.warn("[WinIcon] 请安装@iconify/vue以启用动态图标功能");
  }
});
</script>
