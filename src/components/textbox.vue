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

<style lang="scss" scoped>
.win-textbox-wrapper {
  width: 300px;
  height: 32px;
  outline: var(--w-textbox-default-border) solid 2px;
  outline-offset: -2px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  cursor: text;
  &:focus-within {
    outline: var(--w-textbox-default-focus-border) solid 2px;
  }
  .win-textbox-clear {
    height: 32px;
    width: 32px;
    background-color: transparent;
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: center;
    &:active {
      background-color: var(--w-textbox-icon-default-hover-bg);
      .icon-accept {
        color: white !important;
      }
    }
    &:hover {
      .icon-accept {
        color: var(--w-textbox-icon-default-hover-color);
      }
    }
    .icon-accept {
      color: black;
    }
  }
  .win-textbox {
    margin: 0 10px;
    height: 100%;
    flex: 1;
    border: none;
    background-color: transparent;
    appearance: none;
    font-size: 14px;
    border-radius: 0;
    padding: 0;
    vertical-align: middle;
    &:focus {
      outline: none;
    }
  }
}
</style>
