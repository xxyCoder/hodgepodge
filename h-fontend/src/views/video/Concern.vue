<template>
    <div class="video-concern">
        <video-card v-for="item in videos" ::key="item.id" :video="item" />
    </div>
</template>

<script setup lang="ts">
import VideoCard from "@/components/VideoCard.vue";
import { IVideo } from "@/types/index.ts";

const videos: IVideo[] = [{
    id: "1",
    title: "我放弃了年薪40w的offer",
    author: "阿杜是阿宇的啊",
    date: "11-6",
    userId: "2",
    thumb: 666,
    comments: 40,
    collection: 10,
    img: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover",
    imgWebp: "/src/assets/qiuzhao.webp",
    imgAvif: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover.avif",
    src: "https://www.bilibili.com/video/BV15Q4y1n7jh/?spm_id_from=333.1007.tianma.4-1-11.click"
}, {
    id: "1",
    title: "我放弃了年薪40w的offer",
    author: "阿杜是阿宇的啊",
    date: "11-6",
    userId: "2",
    thumb: 666,
    comments: 40,
    collection: 10,
    img: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover",
    imgWebp: "/src/assets/qiuzhao.webp",
    imgAvif: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover.avif",
    src: "https://www.bilibili.com/video/BV15Q4y1n7jh/?spm_id_from=333.1007.tianma.4-1-11.click"
},
{
    id: "1",
    title: "我放弃了年薪40w的offer",
    author: "阿杜是阿宇的啊",
    date: "11-6",
    userId: "2",
    thumb: 666,
    comments: 40,
    collection: 10,
    img: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover",
    imgWebp: "/src/assets/qiuzhao.webp",
    imgAvif: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover.avif",
    src: "https://www.bilibili.com/video/BV15Q4y1n7jh/?spm_id_from=333.1007.tianma.4-1-11.click"
},
{
    id: "1",
    title: "我放弃了年薪40w的offer",
    author: "阿杜是阿宇的啊",
    date: "11-6",
    userId: "2",
    thumb: 666,
    comments: 40,
    collection: 10,
    img: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover",
    imgWebp: "/src/assets/qiuzhao.webp",
    imgAvif: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover.avif",
    src: "https://www.bilibili.com/video/BV15Q4y1n7jh/?spm_id_from=333.1007.tianma.4-1-11.click"
}, {
    id: "1",
    title: "我放弃了年薪40w的offer",
    author: "阿杜是阿宇的啊",
    date: "11-6",
    userId: "2",
    thumb: 666,
    comments: 40,
    collection: 10,
    img: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover",
    imgWebp: "/src/assets/qiuzhao.webp",
    imgAvif: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover.avif",
    src: "https://www.bilibili.com/video/BV15Q4y1n7jh/?spm_id_from=333.1007.tianma.4-1-11.click"
}, {
    id: "1",
    title: "我放弃了年薪40w的offer",
    author: "阿杜是阿宇的啊",
    date: "11-6",
    userId: "2",
    thumb: 666,
    comments: 40,
    collection: 10,
    img: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover",
    imgWebp: "/src/assets/qiuzhao.webp",
    imgAvif: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover.avif",
    src: "https://www.bilibili.com/video/BV15Q4y1n7jh/?spm_id_from=333.1007.tianma.4-1-11.click"
}, {
    id: "1",
    title: "我放弃了年薪40w的offer",
    author: "阿杜是阿宇的啊",
    date: "11-6",
    userId: "2",
    thumb: 666,
    comments: 40,
    collection: 10,
    img: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover",
    imgWebp: "/src/assets/qiuzhao.webp",
    imgAvif: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover.avif",
    src: "https://www.bilibili.com/video/BV15Q4y1n7jh/?spm_id_from=333.1007.tianma.4-1-11.click"
}, {
    id: "1",
    title: "我放弃了年薪40w的offer",
    author: "阿杜是阿宇的啊",
    date: "11-6",
    userId: "2",
    thumb: 666,
    comments: 40,
    collection: 10,
    img: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover",
    imgWebp: "/src/assets/qiuzhao.webp",
    imgAvif: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover.avif",
    src: "https://www.bilibili.com/video/BV15Q4y1n7jh/?spm_id_from=333.1007.tianma.4-1-11.click"
}, {
    id: "1",
    title: "我放弃了年薪40w的offer",
    author: "阿杜是阿宇的啊",
    date: "11-6",
    userId: "2",
    thumb: 666,
    comments: 40,
    collection: 10,
    img: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover",
    imgWebp: "/src/assets/qiuzhao.webp",
    imgAvif: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover.avif",
    src: "https://www.bilibili.com/video/BV15Q4y1n7jh/?spm_id_from=333.1007.tianma.4-1-11.click"
}, {
    id: "1",
    title: "我放弃了年薪40w的offer",
    author: "阿杜是阿宇的啊",
    date: "11-6",
    userId: "2",
    thumb: 666,
    comments: 40,
    collection: 10,
    img: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover",
    imgWebp: "/src/assets/qiuzhao.webp",
    imgAvif: "https://i1.hdslb.com/bfs/archive/17ba0571cebe3cc22e5f296d94710c874335dd7f.jpg@672w_378h_1c_!web-home-common-cover.avif",
    src: "https://www.bilibili.com/video/BV15Q4y1n7jh/?spm_id_from=333.1007.tianma.4-1-11.click"
}, {
    id: "1",
    title: "我放弃了年薪40w的offer",
    author: "阿杜是阿宇的啊",
    date: "11-6",
    userId: "2",
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
    min-width: 1100px;
}
</style>