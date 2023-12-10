<template>
    <div class="video-recent">
        <video-card class="video-card" v-for="item in videos" ::key="item.id" :video="item" />
    </div>
</template>

<script setup lang="ts">
import VideoCard from "@/components/VideoCard.vue";
import { IVideo } from "@/types/index.ts";


</script>

<style lang="scss">
.video-recent {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    min-width: 500px;
    height: calc(100vh - 50px);
    overflow-x: auto;
}
</style>