<template>
  <label class="win-toggleswitch">
    <input type="checkbox" class="win-toggleswitch-input" />
    <slot></slot>
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "WinToggleSwitch",
});
</script>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.win-toggleswitch-input {
  display: none;
}

.win-toggleswitch {
  display: inline-flex;
  user-select: none;
  position: relative;
  align-items: center;
  vertical-align: middle;
}

.win-toggleswitch::before {
  content: "";
  width: 42px;
  height: 18px;
  background-color: transparent;
  display: inline-block;
  border: 4px solid var(--w-toggleswitch-default-border);
  outline-offset: -4px;
  vertical-align: middle;
  margin-right: 4px;
  border-radius: 36px;
  transition: all 200ms cubic-bezier(1, 0, 0, 1);
}

.win-toggleswitch:has(.win-toggleswitch-input:checked)::before {
  text-align: center;
  color: var(--w-toggleswitch-default-active-slider);
  font-weight: bold;
  line-height: 18px;
  background-color: var(--w-toggleswitch-default-active-bg);
  border: 4px solid var(--w-toggleswitch-default-active-border);
}

.win-toggleswitch::after {
  content: "";
  width: 12px;
  height: 12px;
  background-color: var(--w-toggleswitch-default-slider);
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  left: 6px;
  transition: all 200ms cubic-bezier(1, 0, 0, 1);
}

.win-toggleswitch:has(.win-toggleswitch-input:checked)::after {
  content: "";
  background-color: var(--w-toggleswitch-default-active-slider);
  left: calc(46px - 16px);
}
</style>
