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
import "./style.scss";
</script>
