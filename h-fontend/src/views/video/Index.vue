<template>
    <div class="video">
        <Side parentPath="video" :type="VIDEO" />
        <router-view style="flex:1"></router-view>
    </div>
</template>


<script setup lang="ts">
import Side from "@/components/Side.vue"
import { VIDEO } from '@/types/constant'

</script>

<style scoped lang="scss">
.video {
    display: flex;
    position: relative;
    transform: translateY(50px);
}
</style>