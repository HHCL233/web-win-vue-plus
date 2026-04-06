<template>
    <label class="win-checkbox">
        <input type="checkbox" class="win-checkbox-input">
        <slot></slot>
    </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'WinCheckbox'
})
</script>
<script lang="ts" setup>

</script>