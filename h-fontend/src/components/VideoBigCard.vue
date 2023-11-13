<template>
    <div class="video-big__card">
        <img class="video-avatar" src="@/assets/hkd.webp" alt="">
        <div class="video-card_right">
            <h5 class="ellipsis">{{ video.author }}</h5>
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
                    <div class="video-card__interaction">
                        <div class="video-interaction__icon"></div>
                        <div class="hotComment fs-small">
                            <span>{{ video.hotComment?.username }}</span>:&nbsp;
                            {{ video.hotComment?.comment }}
                        </div>
                    </div>
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
    display: flex;
    box-sizing: border-box;
    padding: .625rem;
    overflow-wrap: break-word;
    box-sizing: border-box;
    padding: 0.625rem;
    border: 0 solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 3px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
    margin-top: 1.25rem;
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

.video-interaction__icon {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASmSURBVHgB7VlRctpIEO0eBMknuQF7giUnWHyCeE8A+tg4LkhsThB8Ary7drni/RCcIPgEZk8QbpDkBnymjJhOj4xgJI1AQkKQKt4PSDUzmjfd093zBuCII4444ogVEHLG3Z1TcwFqafpYAN/Oz+1vkCMyE/v3zmnwKKco8A8gqEMWIExI0v88zuj9uT2GDNia2D93TkuUsMmTaMAOQGxFBOx1zppD2AKpiSkLYQn7ma2TEIqgK+mkm9JVUxG7/W/4kV2lB9GPTwXBWAKOAeV3S8IEEkJKqEoBVUDxuwBqSIQGT6oabseu3mv/1bxKOm5iYjf3A4cZtPR3ajWB8Np9IYdd255CDug7TrX0w9uzHzEchBAGnbctO8k4iYgZSUm6cl/CdV6ETGC37ymCgZcJyW0kFnY/z0qS7KxRKylub526tPBzyHrXnbNWd12/tcS8yCfQ8Z+33chZ0efcaAl81MnxYp+sW9xYYsrXrSf8og82k/Rb0aR8KMuRhY+wCCzeIlfoddxWEHEDVVxxETQ/dfdFSqHdticSaBkV1dysH3AZ1z6WmJTU8v+r1emc2dewZ3xQc0AY+88cWC6UZ5naGompvRWwFgcLOBDQnPRcVi0/BaO1DyMxr1TyB2JrFRUBk2Axl1UBgPjG1M7sinr9J2mrWm2X4Ij4sHqAuskdI8S8aj2IMRwextr/amUWPSZFLSaCdRpXF4nrvqIQntN8Hi3Io8RkoNF0lyXTtljMaTkvIWCzK+ogrfOhQZ8byZTEfmVEiHlF7gKYUrsoEvrcUEQ9K0Is3EiJM3Bg6N87gWBBhoNthJgbajSD3WgaWVAKRUFX8zIfEWKq0NXdsSTMmX2fQG2x1VxNxXlM5bHK7NyxEVdo7gPqbMbF77LkQzQXEHEl1Uh7qq47HhSNiiWa+vMsWBQvEXvQZJ3jUasZp3zIfL3P85iCslZZ4NflC1bGOu9aJ6a2sXkscjworSSCfYHn8Fl/RkGxukcsMXU8IKK/ly/YejefBn3YE5SoFBBpWa1qv7Vj69i1lYf7AnoUDKWX3gcKhkkpi9tbPjbLbyERZdFp9CR3r4GoaFyesftRILxP3QT7fWOtqEQUdElt0FXRCXCq5LCbT8Mm7Ai398MLVsm+Rki5yeS/xBJ3jHDpuQVrjwOuax7W+Xyib6hSCcUbFpIuw/q9J7e59Ge3newbqS4lPOESoKcnyNDHp5wwJ0gwZals+P7MHsWOxQtVKePFol+dCGqmy4jFwOMZkZ3G9be6H/NULNOlQQizCr0yHVRNyq4Jz4GLuusWKA6ZbjQ9CRzZehhTKBOedt41H/RXJoU52g9UqrnKoo5ZkAEfzu0B/wyeJ8vkWFbQb0ckyVfhPl6U0zV4tUfV3RrRdw5lE7cC4zzkiEwWM4GTOPn/OQjYC/J+6H7Uk+wm/T0LMlksKbw99eTlwpr/bnlzsyOxKFeLeffTwiPwDN5jWIJ6OHwXcR2Vr8UQTvVHQhrwvqtisM3EnXM+2nHVkq9KFdLRI0mWi+pZuZiLw1wtti7BZg3faZErMXUxJwBXR5s9EPKRe7hXAYSDQ23+EkaHKI8fcUTB+Akpbi5uawt9pAAAAABJRU5ErkJggg==) 50%/contain no-repeat;
}

.hotComment {
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
</style>