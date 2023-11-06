<template>
    <div class="article-main">
        <ArticleCard v-for="item in articles" :key="item.id" :article="item"></ArticleCard>
    </div>
</template>

<script setup lang="ts">
import ArticleCard from '@/components/ArticleCard.vue';
import type { IArticle } from "@/types/index.ts";

const articles: IArticle[] = [
    {
        id: "1",
        title: "前端走向全栈",
        author: "xxyCoder",
        userId: "1",
        tags: ["前端", "后端", "全栈"],
        summary: "xxxxxx前端，后端,.....，全栈",
        thumb: 666,
        comments: 13,
        collection: 3
    },
    {
        id: "2",
        title: "前端走向全栈",
        author: "xxyCoder",
        userId: "2",
        tags: ["前端", "后端", "全栈"],
        summary: "xxxxxx前端，后端,.....，全栈",
        thumb: 666,
        comments: 13,
        collection: 3,
    },
    {
        id: "3",
        title: "前端走向全栈",
        author: "xxyCoder",
        userId: "3",
        tags: ["前端", "后端", "全栈"],
        summary: "xxxxxx前端，后端,.....，全栈",
        thumb: 666,
        comments: 13,
        collection: 3
    },
    {
        id: "4",
        title: "前端走向全栈",
        author: "xxyCoder",
        userId: "4",
        tags: ["前端", "后端", "全栈"],
        summary: "xxxxxx前端，后端,.....，全栈",
        thumb: 666,
        comments: 13,
        collection: 3
    },
    {
        id: "5",
        title: "前端走向全栈",
        author: "xxyCoder",
        userId: "4",
        tags: ["前端", "后端", "全栈"],
        summary: "xxxxxx前端，后端,.....，全栈",
        thumb: 666,
        comments: 13,
        collection: 3
    },
    {
        id: "4",
        title: "前端走向全栈",
        author: "xxyCoder",
        userId: "4",
        tags: ["前端", "后端", "全栈"],
        summary: "xxxxxx前端，后端,.....，全栈",
        thumb: 666,
        comments: 13,
        collection: 3
    }
];
</script>

<style scoped lang="scss">
.article-main {
    width: 100%;
    height: calc(100vh - 50px);
    overflow: auto;
}
</style>