<template>
    <div ref="cardRef" class="container">
        <h5 class="title">{{ article.title }}</h5>
        <div class="content">
            <p>{{ article.summary }}</p>
            <img v-if="article.img" :src="article.img" alt="">
        </div>
        <div class="main" :class="unfold ? '' : 'three-line'" v-if="article.content">
            {{ article.content }}
        </div>
        <div ref="footer" :class="fixedBottom ? 'fixedBottom' : ''" class="footer center">
            <div class="center">
                <router-link :to="'/user/' + article.userId">{{ article.author }}</router-link>
                &nbsp;&nbsp;|
                <v-btn v-show="!support" @click="handlerClickToSup" rounded="0" variant="text"
                    prepend-icon="mdi-thumb-up-outline" color="blue-lighten-2">{{ article.thumb }}</v-btn>
                <v-btn v-show="support" @click="handlerClickToSup" rounded="0" variant="text" prepend-icon="mdi-thumb-up"
                    color="blue-lighten-2">
                    {{ article.thumb }}
                </v-btn>
                &nbsp;&nbsp;
                <v-btn rounded="0" variant="text" prepend-icon="mdi-comment-processing-outline" color="blue-lighten-2">{{
                    article.comments }}</v-btn>
                <v-btn v-show="!collection" @click="handlerClickToCol" rounded="0" variant="text"
                    prepend-icon="mdi-star-outline" color="blue-lighten-2">{{ article.thumb }}</v-btn>
                <v-btn v-show="collection" @click="handlerClickToCol" rounded="0" variant="text" prepend-icon="mdi-star"
                    color="blue-lighten-2">{{ article.thumb }}</v-btn>
            </div>
            <div v-if="article.content" class="more-btn" @click="handlerClick">{{ unfold ? "收起全文" : "阅读全文" }}
                <v-icon v-show="!unfold" icon="mdi-chevron-down"></v-icon>
                <v-icon v-show="unfold" icon="mdi-chevron-up"></v-icon>
            </div>
            <div>
                <span class="tag" v-for="( t, i ) in  article.tags " :key="i">{{ t }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { IArticle } from "@/types/index.ts";
import { ref, onUpdated, computed, PropType } from "vue";

defineProps({
    article: {
        type: Object as PropType<IArticle>,
        required: true
    },
    scrollTop: Number
});

const support = ref(false);
const collection = ref(false);
const unfold = ref(false);
const reachFooter = ref(false);
const intoView = ref(false);
const fixedBottom = computed(() => {
    return unfold.value && intoView.value && !reachFooter.value;
});
const cardRef = ref<HTMLDivElement>();
const height = document.documentElement.clientHeight;

onUpdated(() => {
    if (unfold.value) {
        const bottom = cardRef.value!.getBoundingClientRect().bottom, top = cardRef.value!.getBoundingClientRect().top;
        // 判断内容卡片是否进入可视区域
        if (top + 100 <= height) {
            intoView.value = true;
        } else {
            intoView.value = false;
        }

        // 判断底部是否进入可视区域
        if (!reachFooter.value) {
            if (height >= bottom) {
                reachFooter.value = true;
            }
        } else if (height < bottom) {
            reachFooter.value = false;
        }
    }
})

const handlerClickToSup = () => {
    support.value = !support.value;
};
const handlerClickToCol = () => {
    collection.value = !collection.value;
};
const handlerClick = () => {
    unfold.value = !unfold.value;
    reachFooter.value = false;
    intoView.value = !intoView.value;
};

</script>

<style lang="scss" scoped>
.container {
    cursor: pointer;
    box-sizing: border-box;
    padding: .75rem 1.25rem 0;
    border-bottom: 1px solid #e4e6eb;
}

.title {
    font-weight: bold;
    font-size: 1.25rem;
}

.content {
    p {
        overflow: hidden;
        text-overflow: ellipsis;
        text-wrap: nowrap;
    }

    img {
        height: 4.5rem;
        width: 6.75rem;
        margin-left: 1.5rem;
        border-radius: .25rem;
        border: 1px solid hsla(0, 0%, 100%, 0.1);
    }
}

.main {
    font-size: .9375rem;
}

.more-btn {
    color: #175399;
    font-size: 1rem;
}

.center {
    display: flex;
    align-items: center;
}

.footer {
    font-size: .875rem;
    justify-content: space-between;
    text-wrap: nowrap;
}

.tag {
    font-size: 12px;
    padding: 0 6px;
    border-radius: .125rem;
    box-sizing: border-box;
    margin-left: 6px;
    color: #5f5c5c;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 18px;
    max-width: 65px;
}

.three-line {
    max-height: 100px;
    -webkit-line-clamp: 3;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}

.fixedBottom {
    bottom: 0px;
    position: fixed;
    z-index: 1;
    background-color: #fff;
    width: calc(80% - 1.25rem);
}
</style>