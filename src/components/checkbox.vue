<template>
  <label class="win-checkbox">
    <input type="checkbox" class="win-checkbox-input" />
    <slot></slot>
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "WinCheckBox",
});
</script>
<script lang="ts" setup></script>

<style lang="scss" scoped>
.win-checkbox-input {
  opacity: 0;
  pointer-events: none;
  width: 0;
}

.win-checkbox {
  display: inline-flex;
  user-select: none;
  align-items: center;
  vertical-align: middle;
}

.win-checkbox::before {
  content: "";
  width: 18px;
  height: 18px;
  line-height: 18px;
  background-color: transparent;
  border: 4px solid var(--w-checkbox-default-border);
}

.win-checkbox:has(.win-checkbox-input:checked)::before {
  content: "✓";
  text-align: center;
  color: white;
  font-weight: bold;
  line-height: 18px;
  background-color: var(--w-checkbox-default-active-bg);
  border: 4px solid var(--w-checkbox-default-active-border);
}
</style>
