<template>
    <div class="recommend">
        <h4>{{ title }}</h4>
        <ul v-show="recommends.length" class="recommend-list">
            <li v-for="item in recommends" :key="item.id">
                <a :href="item.addr">{{ item.title }}</a>
            </li>
        </ul>
        <div v-show="!recommends.length">今日暂无推荐内容~~~</div>
    </div>
</template>

<script lang="ts" setup>
import type { IRecommend } from '@/types/index.ts';
import { PropType } from 'vue';

defineProps({
    title: {
        type: String,
        required: true
    },
    recommends: {
        type: Array as PropType<IRecommend[]>,
        default: []
    }
})
</script>

<style lang="scss" scoped>
.recommend {
    margin-bottom: 5px;
    box-sizing: border-box;
    padding: .625rem;
    ul,
    div {
        font-size: 14px;
        overflow: hidden;
        text-wrap: nowrap;
        text-overflow: ellipsis;
    }

    a {
        color: rgb(45, 44, 44);
        transition: font-size linear 0.3s;
    }

    a:hover {
        color: #000;
    }
}
.recommend-list {
    li {
        margin: .3125rem 0;
    }
}
</style>