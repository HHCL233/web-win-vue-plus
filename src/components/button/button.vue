<template>
  <WinBaseButton class="win-button" ref="button">
    <slot></slot>
  </WinBaseButton>
</template>

<script lang="ts" setup>
import WinBaseButton from "../basebutton";
import "./style.scss";

defineOptions({ name: "WinButton" });
</script>
