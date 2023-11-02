<template>
    <nav>
        <div class="nav-left__search">
            <div class="nav__search">
                <router-link to="/article">文章</router-link>
                <input placeholder="请输入文章的关键字" type="search" />
            </div>
            <div class="nav__search">
                <router-link to="/video">视频</router-link>
                <input placeholder="请输入视频的关键字" type="search" />
            </div>
            <div class="nav__search">
                <router-link to="/shop">商城</router-link>
                <input placeholder="请输入商品的关键字" type="search" />
            </div>
        </div>
        <div class="nav-right__info">
            <v-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
            </v-avatar>
            <svg-icon class="message" type="mdi" :path="path"></svg-icon>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMessageSettingsOutline } from '@mdi/js';

const path = ref(mdiMessageSettingsOutline)
</script>

<style lang="scss" scoped>
nav {
    padding: 5px;
    display: flex;
    background-color: aquamarine;
    justify-content: space-between;
    align-items: center;
}

.nav-left__search {
    display: flex;
    display: flex;
    text-wrap: nowrap;
}

input[type="search"] {
    border: 1px black solid;
    outline: none;
    padding: 0 5px;
    margin: 0 6px;
    font-size: 14px;
    border-radius: 2px;
}

a {
    text-decoration: none;
    color: white;
}

.message {
    margin: 0 10px -6px;
    cursor: pointer;
}
</style>