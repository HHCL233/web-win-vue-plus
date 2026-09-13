<template>
  <label class="win-input-wrapper">
    <input
      class="win-input"
      v-model="inputContent"
      @focus="onFocus"
      @blur="onBlur"
    />
    <div
      class="win-input-clear"
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

defineOptions({ name: "WinInput" });

const inputContent = defineModel<string>("");
const hasContent = ref(false);
const isFocus = ref(false);

const onFocus = () => {
  console.log(11);
  isFocus.value = true;
};

const onBlur = () => {
  isFocus.value = false;
};

const clearContent = () => {
  console.log(223);
  inputContent.value = "";
};

watch(
  () => inputContent.value,
  () => {
    if (inputContent.value?.length ?? 0 >= 1) {
      console.log(22);
      hasContent.value = true;
    } else {
      hasContent.value = false;
    }
  },
);
</script>

<style lang="scss" scoped>
.win-input-wrapper {
  width: 300px;
  height: 32px;
  outline: var(--w-input-default-border) solid 2px;
  outline-offset: -2px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  cursor: text;
  &:focus-within {
    outline: var(--w-input-default-focus-border) solid 2px;
  }
  .win-input-clear {
    height: 32px;
    width: 32px;
    background-color: transparent;
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .win-input {
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
