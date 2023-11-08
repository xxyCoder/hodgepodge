<template>
    <div class="article">
        <Side parentPath="article" :type="TEXT" />
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import Side from '@/components/Side.vue';
import { TEXT } from '@/types/constant';
</script>

<style scoped lang="scss">
.article {
    display: flex;
}

</style>