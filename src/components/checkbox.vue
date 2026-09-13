<template>
  <label class="win-checkbox">
    <div class="checkbox-icon">
      <Icon icon="fluent-mdl2:accept-medium" width="24" class="icon-accept" />
    </div>
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
<script lang="ts" setup>
import { Icon } from "@iconify/vue";


</script>

<style lang="scss" scoped>
.win-checkbox {
  display: inline-flex;
  user-select: none;
  align-items: center;
  vertical-align: middle;
  .checkbox-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    line-height: 18px;
    background-color: transparent;
    border: 4px solid var(--w-checkbox-default-border);
    .icon-accept {
      opacity: 0;
    }
  }
  .win-checkbox-input {
    opacity: 0;
    pointer-events: none;
    width: 0;
  }
  &:has(.win-checkbox-input:checked) .checkbox-icon {
    text-align: center;
    color: white;
    font-weight: bold;
    line-height: 18px;
    background-color: var(--w-checkbox-default-active-bg);
    border: 4px solid var(--w-checkbox-default-active-border);
    .icon-accept {
      opacity: 1;
    }
  }
}
</style>
