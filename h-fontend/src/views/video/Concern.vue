<template>
    <div class="video-concern">
        <VideoBigCard class="center" v-for="video in videos" :video="video" :key="video.id"></VideoBigCard>
    </div>
</template>

<script setup lang="ts">
import VideoBigCard from '@/components/VideoBigCard.vue';
import { IVideo } from "@/types/index.ts"

</script>

<style lang="scss">
.video-concern {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-width: 500px;
    height: calc(100vh - 50px);
    overflow-x: auto;
}
</style>