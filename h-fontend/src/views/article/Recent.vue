<template>
    <div class="article-main">
        <ArticleCard v-for="item in articles" :key="item.id" :article="item"></ArticleCard>
    </div>
</template>

<script setup lang="ts">
import ArticleCard from '@/components/ArticleCard.vue';
import type { IArticle } from "@/types/index.ts";


</script>

<style scoped lang="scss">
.article-main {
    width: 100%;
    height: calc(100vh - 50px);
    overflow: auto;
}
</style>