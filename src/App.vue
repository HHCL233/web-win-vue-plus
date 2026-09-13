<template>
  <WinButton>Button</WinButton>
  <WinCheckBox>Checkbox</WinCheckBox>
  <WinToggleSwitch>11</WinToggleSwitch>
  <WinSlider></WinSlider>
  <div class="tiles">
    <WinTile :showDynamic="false">
      <template #content>11</template>
    </WinTile>
    <WinTile></WinTile>
    <WinTile></WinTile>
  </div>
  <WinInput />
</template>

<script setup lang="ts">
import { WinInput } from ".";
</script>

<style lang="scss" scoped>
.tiles {
  display: flex;
  gap: 8px;
}
</style>
