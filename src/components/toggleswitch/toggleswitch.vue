<template>
  <label class="win-toggleswitch">
    <input type="checkbox" class="win-toggleswitch-input" v-model="model" />
    <slot></slot>
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "WinToggleSwitch",
});
</script>
<script lang="ts" setup>
import "./style.scss";
const model = defineModel<boolean>();
</script>
