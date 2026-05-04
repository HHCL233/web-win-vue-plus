<template>
    <input type="range" class="win-slider" min="1" max="100" v-model="model">
</template>

<script lang="ts">
import { defineComponent, defineProps } from 'vue'
export default defineComponent({
    name: 'WinSlider'
})

const props = defineProps({
    title: {
        type: String,
        default: '默认标题'
    },
    count: {
        type: Number,
        default: 0
    }
})
</script>
<script lang="ts" setup>
const model = defineModel()
</script>