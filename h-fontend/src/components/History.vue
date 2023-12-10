<template>
    <div class="history">
        <h4>{{ title }}</h4>
        <div v-show="histories.length">
            <div class="history-list">
                <div class="history-list__first interval">
                    <div class="history-card">
                        <div class="card-main">
                            <template v-if="type === VIDEO">
                                <video :src="firstHistory?.summaryOrSrc"></video>
                            </template>
                            <template v-else>
                                {{ firstHistory?.summaryOrSrc }}
                            </template>
                        </div>
                        <p class="card-title">
                            {{ firstHistory?.titleOrName }}
                        </p>
                    </div>
                    <div class="layer"></div>
                    <div class="layer tiny"></div>
                </div>
                <div class="history-list__other interval" v-for="item in otherHistories" :key="item.id">
                    <div class="history-card">
                        <div class="card-main">
                            {{ item?.summaryOrSrc }}
                        </div>
                        <p class="card-title">
                            {{ item?.titleOrName }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="!histories.length">没有历史记录~~~</div>
    </div>
</template>

<script lang="ts" setup>
import type { IHistory } from "@/types/index";
import { VIDEO } from '@/types/constant.ts'
import { PropType } from "vue";

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    histories: {
        type: Array as PropType<IHistory[]>,
        default: []
    },
    type: {
        type: Number,
        required: true
    }
});
let firstHistory = props.histories[0];
let otherHistories = props.histories.slice(1);
</script>

<style lang="scss" scoped>
.history {
    overflow: auto;

    h4 {
        text-align: center;
        position: sticky;
        top: 0;
        z-index: 1;
        background-color: #fff;
    }
}


.interval {
    margin: .625rem 0;
}

.history-card {
    overflow-wrap: break-word;
    box-sizing: border-box;
    padding: .625rem;
    border: 0 solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)),
        0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)),
        0px 1px 3px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
}

.history-list__first {
    position: relative;
    background-color: #fff;
    margin-bottom: 1.25rem;
}

.layer {
    width: 90%;
    height: 100%;
    z-index: -1;
    left: 50%;
    transform: translate(-50%, 6px);
    top: 0;
    position: absolute;
    background: #E3E5E7;
    border-radius: 6px;
}

.tiny {
    z-index: -2;
    width: 80%;
    transform: translate(-50%, 12px);
    background: #F1F2F3;
}

.card-main {
    font-size: 14px;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}

.card-title {
    font-weight: bold;
    margin-top: .625rem;
}
</style>