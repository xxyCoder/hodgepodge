<template>
    <div class="video-concern">
        <VideoBigCard class="center" v-for="video in videos" :video="video" :key="video.id"></VideoBigCard>
    </div>
</template>

<script setup lang="ts">
import VideoBigCard from '@/components/VideoBigCard.vue';
import { IVideo } from "@/types/index.ts"

const videos: IVideo[] = [{
    id: "1",
    title: "计算机组成原理微课堂",
    author: "湖科大教书匠",
    date: "11月09日",
    introduction: "计算机组成原理微课堂延续深受大家喜欢的计算机网络微课堂的风格，用简单的语言描述复杂的问题，用形象生动的动画演示抽象的概念，用精美的文案给人视觉上的享受。让初学者更容易入门计算机组成原理。 希望在计算机组成原理的学习、复习和考研中能够助你一臂之力。"
    , userId: "2",
    thumb: 666,
    comments: 40,
    collection: 10,
    forward: 2,
    img: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover",
    imgWebp: "/src/assets/qiuzhao.webp",
    imgAvif: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover.avif",
    src: "https://www.bilibili.com/video/BV15Q4y1n7jh/?spm_id_from=333.1007.tianma.4-1-11.click",
    hotComment: {
        userId: "2",
        username: "xxyCoder",
        comment: "24考研408计组第一轮复习就决定跟你了！"
    }
}, {
    id: "1",
    title: "计算机组成原理微课堂",
    author: "湖科大教书匠",
    date: "11月09日",
    introduction: "计算机组成原理微课堂延续深受大家喜欢的计算机网络微课堂的风格，用简单的语言描述复杂的问题，用形象生动的动画演示抽象的概念，用精美的文案给人视觉上的享受。让初学者更容易入门计算机组成原理。 希望在计算机组成原理的学习、复习和考研中能够助你一臂之力。"
    , userId: "2",
    thumb: 666,
    forward: 2,
    comments: 40,
    collection: 10,
    img: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover",
    imgWebp: "/src/assets/qiuzhao.webp",
    imgAvif: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover.avif",
    src: "https://www.bilibili.com/video/BV15Q4y1n7jh/?spm_id_from=333.1007.tianma.4-1-11.click"
},
{
    id: "1",
    title: "计算机组成原理微课堂",
    author: "湖科大教书匠",
    date: "11月09日",
    introduction: "计算机组成原理微课堂延续深受大家喜欢的计算机网络微课堂的风格，用简单的语言描述复杂的问题，用形象生动的动画演示抽象的概念，用精美的文案给人视觉上的享受。让初学者更容易入门计算机组成原理。 希望在计算机组成原理的学习、复习和考研中能够助你一臂之力。"
    , userId: "2",
    thumb: 666,
    forward: 2,
    comments: 40,
    collection: 10,
    img: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover",
    imgWebp: "/src/assets/qiuzhao.webp",
    imgAvif: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover.avif",
    src: "https://www.bilibili.com/video/BV15Q4y1n7jh/?spm_id_from=333.1007.tianma.4-1-11.click"
},
{
    id: "1",
    title: "计算机组成原理微课堂",
    author: "湖科大教书匠",
    date: "11月09日",
    forward: 2,
    introduction: "计算机组成原理微课堂延续深受大家喜欢的计算机网络微课堂的风格，用简单的语言描述复杂的问题，用形象生动的动画演示抽象的概念，用精美的文案给人视觉上的享受。让初学者更容易入门计算机组成原理。 希望在计算机组成原理的学习、复习和考研中能够助你一臂之力。"
    , userId: "2",
    thumb: 666,
    comments: 40,
    collection: 10,
    img: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover",
    imgWebp: "/src/assets/qiuzhao.webp",
    imgAvif: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover.avif",
    src: "https://www.bilibili.com/video/BV15Q4y1n7jh/?spm_id_from=333.1007.tianma.4-1-11.click"
}, {
    id: "1",
    title: "计算机组成原理微课堂",
    author: "湖科大教书匠",
    date: "11月09日",
    forward: 2,
    introduction: "计算机组成原理微课堂延续深受大家喜欢的计算机网络微课堂的风格，用简单的语言描述复杂的问题，用形象生动的动画演示抽象的概念，用精美的文案给人视觉上的享受。让初学者更容易入门计算机组成原理。 希望在计算机组成原理的学习、复习和考研中能够助你一臂之力。"
    , userId: "2",
    thumb: 666,
    comments: 40,
    collection: 10,
    img: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover",
    imgWebp: "/src/assets/qiuzhao.webp",
    imgAvif: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover.avif",
    src: "https://www.bilibili.com/video/BV15Q4y1n7jh/?spm_id_from=333.1007.tianma.4-1-11.click"
}, {
    id: "1",
    title: "计算机组成原理微课堂",
    author: "湖科大教书匠",
    date: "11月09日",
    introduction: "计算机组成原理微课堂延续深受大家喜欢的计算机网络微课堂的风格，用简单的语言描述复杂的问题，用形象生动的动画演示抽象的概念，用精美的文案给人视觉上的享受。让初学者更容易入门计算机组成原理。 希望在计算机组成原理的学习、复习和考研中能够助你一臂之力。"
    , userId: "2",
    thumb: 666,
    forward: 2,
    comments: 40,
    collection: 10,
    img: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover",
    imgWebp: "/src/assets/qiuzhao.webp",
    imgAvif: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover.avif",
    src: "https://www.bilibili.com/video/BV15Q4y1n7jh/?spm_id_from=333.1007.tianma.4-1-11.click"
}, {
    id: "1",
    title: "计算机组成原理微课堂",
    author: "湖科大教书匠",
    date: "11月09日",
    introduction: "计算机组成原理微课堂延续深受大家喜欢的计算机网络微课堂的风格，用简单的语言描述复杂的问题，用形象生动的动画演示抽象的概念，用精美的文案给人视觉上的享受。让初学者更容易入门计算机组成原理。 希望在计算机组成原理的学习、复习和考研中能够助你一臂之力。"
    , userId: "2",
    forward: 2,
    thumb: 666,
    comments: 40,
    collection: 10,
    img: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover",
    imgWebp: "/src/assets/qiuzhao.webp",
    imgAvif: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover.avif",
    src: "https://www.bilibili.com/video/BV15Q4y1n7jh/?spm_id_from=333.1007.tianma.4-1-11.click"
}, {
    id: "1",
    title: "计算机组成原理微课堂",
    author: "湖科大教书匠",
    date: "11月09日",
    userId: "2",
    thumb: 666,
    forward: 2,
    comments: 40,
    collection: 10,
    img: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover",
    imgWebp: "/src/assets/qiuzhao.webp",
    imgAvif: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover.avif",
    src: "https://www.bilibili.com/video/BV15Q4y1n7jh/?spm_id_from=333.1007.tianma.4-1-11.click"
}, {
    id: "1",
    title: "计算机组成原理微课堂",
    author: "湖科大教书匠",
    date: "11月09日",
    forward: 2,
    introduction: "计算机组成原理微课堂延续深受大家喜欢的计算机网络微课堂的风格，用简单的语言描述复杂的问题，用形象生动的动画演示抽象的概念，用精美的文案给人视觉上的享受。让初学者更容易入门计算机组成原理。 希望在计算机组成原理的学习、复习和考研中能够助你一臂之力。"
    , userId: "2",
    thumb: 666,
    comments: 40,
    collection: 10,
    img: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover",
    imgWebp: "/src/assets/qiuzhao.webp",
    imgAvif: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover.avif",
    src: "https://www.bilibili.com/video/BV15Q4y1n7jh/?spm_id_from=333.1007.tianma.4-1-11.click"
}, {
    id: "1",
    title: "计算机组成原理微课堂",
    author: "湖科大教书匠",
    date: "11月09日",
    introduction: "计算机组成原理微课堂延续深受大家喜欢的计算机网络微课堂的风格，用简单的语言描述复杂的问题，用形象生动的动画演示抽象的概念，用精美的文案给人视觉上的享受。让初学者更容易入门计算机组成原理。 希望在计算机组成原理的学习、复习和考研中能够助你一臂之力。"
    , userId: "2",
    thumb: 666,
    forward: 2,
    comments: 40,
    collection: 10,
    img: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover",
    imgWebp: "/src/assets/qiuzhao.webp",
    imgAvif: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover.avif",
    src: "https://www.bilibili.com/video/BV15Q4y1n7jh/?spm_id_from=333.1007.tianma.4-1-11.click"
}, {
    id: "1",
    title: "计算机组成原理微课堂",
    author: "湖科大教书匠",
    date: "11月09日",
    introduction: "计算机组成原理微课堂延续深受大家喜欢的计算机网络微课堂的风格，用简单的语言描述复杂的问题，用形象生动的动画演示抽象的概念，用精美的文案给人视觉上的享受。让初学者更容易入门计算机组成原理。 希望在计算机组成原理的学习、复习和考研中能够助你一臂之力。",
    userId: "2",
    forward: 2,
    thumb: 666,
    comments: 40,
    collection: 10,
    img: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover",
    imgWebp: "/src/assets/qiuzhao.webp",
    imgAvif: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover.avif",
    src: "https://www.bilibili.com/video/BV15Q4y1n7jh/?spm_id_from=333.1007.tianma.4-1-11.click"
}];
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