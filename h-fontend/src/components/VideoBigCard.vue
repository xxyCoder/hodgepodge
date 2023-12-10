<template>
    <div class="video-big__card">
        <img class="video-avatar" src="@/assets/hkd.webp" alt="">
        <div class="video-card_right">
            <h5 class="ellipsis">{{ video.username }}</h5>
            <span class="fs-small">{{ video.date }} · 发布了视频</span>
            <div class="video-card__body">
                <div class="video-card__content">
                    <a href="#">
                        <picture>
                            <source :srcset="video.imgAvif" type="img/avif" />
                            <source :srcset="video.imgWebp" type="img/webp" />
                            <img src="@/assets/qiuzhao.webp" :alt="video.title" />
                        </picture>
                    </a>
                    <div class="video-intro">
                        <h6 class="ellipsis">{{ video.title }}</h6>
                        <p class="ellipsis fs-small">{{ video.introduction }}</p>
                    </div>
                </div>
                <div class="video-card__wrap">
                    <div class="video-card__interaction" v-if="video.hotComment">
                        <div class="video-interaction__icon"></div>
                        <div class="hotComment fs-small">
                            <span>{{ video.hotComment?.username }}</span>:&nbsp;
                            {{ video.hotComment?.comment }}
                        </div>
                    </div>
                </div>
                <div class="btns">
                    <v-btn prepend-icon="mdi-share-outline" variant="text">
                        {{ video.forward }}
                    </v-btn>
                    <v-btn prepend-icon="mdi-star-outline" variant="text">
                        {{ video.collection }}
                    </v-btn>
                    <v-btn prepend-icon="mdi-chat-outline" variant="text">
                        {{ video.comments }}
                    </v-btn>
                    <v-btn prepend-icon="mdi-thumb-up-outline" variant="text">
                        {{ video.thumb }}
                    </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IVideo } from "@/types/index.ts"
import { PropType } from "vue";

defineProps({
    video: {
        type: Object as PropType<IVideo>,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.ellipsis {
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-line-clamp: 2;
}

.fs-small {
    font-size: .8125rem;
    color: #9499a0;
}

.video-big__card {
    width: 60%;
    min-width: 550px;
    display: flex;
    box-sizing: border-box;
    padding: .625rem;
    overflow-wrap: break-word;
    box-sizing: border-box;
    padding: 0.625rem;
    margin: 1.25rem 3.125rem 0;
    border: 0 solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 3px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}

.video-avatar {
    height: 50px;
    width: 50px;
    border-radius: 50%;
}

.video-card_right {
    margin-left: .625rem;

    h5 {
        font-size: 1.0625rem;
        color: #18191c;
    }

}

.video-card__content {
    display: flex;

    a {
        display: block;
        margin-right: .625rem;
        width: 25%;
    }

    img {
        width: 100%;
        height: 100%;
    }
}

.video-intro {
    flex: 1;

    h6 {
        font-size: .9375rem;
    }
}

.video-card__wrap {
    position: relative;
    margin-top: .3125rem;
}

.video-card__interaction::before {
    background-color: #e3e5e7;
    border-radius: 1px;
    content: "";
    display: inline-block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 2px;
}

.hotComment {
    margin-left: .625rem;

    span {
        color: #61666d;
    }
}

.hotComment:hover {
    span {
        color: #008ac5;
        cursor: pointer;
    }
}

.btns {
    display: flex;
    justify-content: space-between
}
</style>