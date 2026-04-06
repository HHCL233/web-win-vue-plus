<template>
    <label class="win-toggleswitch">
        <input type="checkbox" class="win-toggleswitch-input">
        <slot></slot>
    </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'WinToggleSwitch'
})
</script>
<script lang="ts" setup>

</script>