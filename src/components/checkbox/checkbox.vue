<template>
  <label class="win-checkbox">
    <div class="checkbox-icon">
      <IconAcceptMedium width="24" class="icon-accept" />
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
import { IconAcceptMedium } from "@iconify-prerendered/vue-fluent-mdl2";
import "./style.scss";
</script>
