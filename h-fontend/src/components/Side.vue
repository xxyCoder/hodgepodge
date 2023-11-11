<template>
    <aside>
        <v-list class="menu" density="compact">
            <v-list-subheader>MENU</v-list-subheader>
            <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary" :to="item.href"
                :active="idx === i">
                <template v-slot:prepend>
                    <v-icon :icon="item.icon"></v-icon>
                </template>
                <v-list-item-title @click="handleClick(i)" v-text="item.text"></v-list-item-title>
            </v-list-item>
        </v-list>
        <RecommendVue title="今日推荐" :recommends="recommends" />
    </aside>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import RecommendVue from './Recommend.vue';
import { IRecommend } from "@/types/index.ts"
import { TEXT, VIDEO, IMAGE } from "@/types/constant.ts"

const props = defineProps({
    parentPath: {
        type: String,
        required: true
    },
    type: {
        validator(value) {
            return value === TEXT || value === VIDEO || value === IMAGE;
        }
    }
})
const items = [
    { text: '关注', icon: 'mdi-account-multiple', href: `/${props.parentPath}/concern` },
    { text: '最近', icon: 'mdi-history', href: `/${props.parentPath}` },
];

let idx = ref(window.location.hash === `#${items[1].href}` ? 1 : 0);
const recommends = ref<IRecommend[]>([]);

const handleClick = (i: number) => {
    idx.value = i;
}
onBeforeMount(async () => {
    switch (props.type) {
        case TEXT:
            recommends.value = [{
                id: "1",
                title: "history.sendBeancon用法",
                addr: ""
            },
            {
                id: "2",
                title: "实现单页应用",
                addr: ""
            },
            {
                id: "3",
                title: "数组新增方法",
                addr: ""
            },
            {
                id: "4",
                title: "history.sendBeancon用法",
                addr: ""
            },
            {
                id: "5",
                title: "实现单页应用",
                addr: ""
            },
            {
                id: "6",
                title: "数组新增方法",
                addr: ""
            }]
            break;
        case VIDEO:
            break;
        case IMAGE:
            break;
        default: break;
    }
})
</script>

<style lang="scss" scoped>
aside {
    width: 20%;
    display: flex;
    flex-direction: column;
}

.menu {
    margin-right: .625rem;
}
</style>