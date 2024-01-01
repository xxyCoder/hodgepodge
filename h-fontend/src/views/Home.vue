<template>
    <Nav></Nav>
    <div class="main">
        <History :type="TEXT" :histories="articleHistories" title="文章浏览记录"></History>
        <History :type="VIDEO" title="视频浏览记录"></History>
        <History :type="FORUM" title="论坛浏览记录"></History>
        <aside>
            <Recommend :recommends="articleRecommends" title="文章今日推荐"></Recommend>
            <Recommend title="视频今日推荐"></Recommend>
            <Recommend title="论坛今日推荐"></Recommend>
        </aside>
    </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';
import History from '@/components/History.vue';
import Recommend from '@/components/Recommend.vue';
import Nav from '@/components/Nav.vue';
import type { IHistory, IRecommend } from '@/types/index.ts';
import { TEXT, VIDEO, FORUM } from '@/types/constant.ts'

const articleHistories = ref<IHistory[]>([]);
// const videoHistories = ref<IHistory[]>([]);
// const shopHistories = ref<IHistory[]>([]);

const articleRecommends = ref<IRecommend[]>();

onBeforeMount(async () => {
    articleHistories.value = [];
    articleRecommends.value = [];
})

</script>

<style lang="scss" scoped>
.main {
    display: grid;
    margin-top: 50px;
    column-gap: .9375rem;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 100%;
    height: calc(100vh - 50px);
    overflow-y: auto;
    overflow-x: hidden;
    min-height: 21.25rem;
}

aside {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, 30%);
}
</style>