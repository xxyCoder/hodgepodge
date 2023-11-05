<template>
    <v-list class="side" density="compact">
        <v-list-subheader>MENU</v-list-subheader>
        <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary" :to="item.href" :active="idx === i">
            <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
            </template>
            <v-list-item-title @click="handleClick(i)" v-text="item.text"></v-list-item-title>
        </v-list-item>
    </v-list>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    parentPath: {
        type: String,
        required: true
    }
})
const items = [
    { text: '关注', icon: 'mdi-account-multiple', href: `/${props.parentPath}/concern` },
    { text: '最近', icon: 'mdi-history', href: `/${props.parentPath}` },
];

let idx = ref(window.location.hash === `#${items[1].href}` ? 1 : 0);
const handleClick = (i: number) => {
    idx.value = i;
}
</script>

<style lang="scss" scoped>
.side {
    width: 20%;
    margin-right: .625rem;
}
</style>