<template>
    <div ref="articleRef" class="article-main">
        <ArticleCard :scrollTop="scrollTop" v-for="item in articles" :key="item.id" :article="item"></ArticleCard>
    </div>
</template>

<script setup lang="ts">
import { throttle } from 'lodash';
import ArticleCard from '@/components/ArticleCard.vue';
import { onMounted, onBeforeUnmount, ref } from 'vue'

const articleRef = ref<HTMLDivElement>();
const scrollTop = ref(0);

const fn = throttle(() => {
    scrollTop.value = articleRef.value!.scrollTop;
}, 400);

onMounted(() => {
    articleRef.value!.addEventListener("scroll", fn, true);
});
onBeforeUnmount(() => {
    articleRef.value!.removeEventListener("scroll", fn, true);
})
</script>

<style scoped lang="scss">
.article-main {
    width: 100%;
    height: calc(100vh - 50px);
    overflow: auto;
}
</style>