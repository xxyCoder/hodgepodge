<template>
    <div class="article">
        <Side parentPath="article"/>
        <router-view></router-view>
    </div>
</template>


<script setup lang="ts">
import Side from '@/components/Side.vue';
</script>

<style scoped lang="scss">
.article {
    display: flex;
}

.content {
    flex: 1;
}
</style>