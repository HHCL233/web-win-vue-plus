<template>
  <label class="win-textbox-wrapper">
    <input
      class="win-textbox"
      v-model="textboxContent"
      @focus="onFocus"
      @blur="onBlur"
    />
    <div
      class="win-textbox-clear"
      v-if="hasContent && isFocus"
      @click="clearContent"
      @pointerdown.prevent
      tabindex="1"
    >
      <Icon icon="fluent-mdl2:clear" width="12" class="icon-accept" />
    </div>
  </label>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { Icon } from "@iconify/vue";
import "./style.scss";

defineOptions({ name: "WinTextBox" });

const textboxContent = defineModel<string>();
const hasContent = ref(false);
const isFocus = ref(false);

const onFocus = () => {
  isFocus.value = true;
};

const onBlur = () => {
  isFocus.value = false;
};

const clearContent = () => {
  textboxContent.value = "";
};

watch(
  () => textboxContent.value,
  () => {
    hasContent.value = (textboxContent.value?.length ?? 0) >= 1;
  },
  { immediate: true },
);
</script>
