<template>
    <div class="discuss-card"></div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { IRemark } from '@/types/index'

defineProps({
    remarks: {
        type: Object as PropType<IRemark>
    }
})
</script>

<style lang="scss" scoped></style>