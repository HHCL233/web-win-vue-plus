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
  <WinTextBox />
  <WinToolTip content="Tooltip">
    <div class="test-tooltip">ToolTip</div>
  </WinToolTip>
  <WinNavigationView
    :options="[
      { label: 'NavigationView', icon: 'fluent-mdl2:play' },
      { label: 'NavigationView', icon: 'fluent-mdl2:play' },
      { label: 'NavigationView', icon: 'fluent-mdl2:play' },
      { label: 'NavigationView', icon: 'fluent-mdl2:play' },
      { label: 'NavigationView', icon: 'fluent-mdl2:play' },
    ]"
  >
    <template #content>
      <img src="https://samplelib.com/preview/png/sample-photo-1920x1080.png" />
    </template>
  </WinNavigationView>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.tiles {
  display: flex;
  gap: 8px;
}

.test-tooltip {
  background-color: red;
  width: 100px;
  height: 100px;
}
</style>
