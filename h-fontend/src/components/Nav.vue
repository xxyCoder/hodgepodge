<template>
    <nav>
        <div class="nav-left__search">
            <v-btn @click="handleClick" class="home-btn" icon="$vuetify" variant="plain"></v-btn>
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
            <v-btn @click="handleClose" class="chat" icon="mdi-chat" size="small"></v-btn>
            <v-btn @click="changeShowToTrue" v-if="!message" icon="mdi-bell" size="small"></v-btn>
            <v-btn @click="changeShowToTrue" v-else icon="mdi-bell-badge" size="small"></v-btn>
        </div>
        <div @click="stopPropagation" v-show="showList && message" class="message-box">
            <div class="message-list">
                <div>🌟</div>
                <div class="message-box__main">
                    <h5 class="message-box__title">Customized SLA from Vuetify</h5>
                    <div class="message-box__date">Wednesday, July 19, 2023</div>
                    <p class="message-box__content">
                        Elevate your development team’s capabilities with a personalized support plan that
                        provides direct access to the <strong>Vuetify Core Development team</strong>. Get your
                        questions answered by the experts and receive invaluable guidance for your projects.
                    </p>
                </div>
                <v-btn class="confirm" icon="mdi-check"></v-btn>
            </div>
            <div class="message-list">
                <div>🌟</div>
                <div class="message-box__main">
                    <h5 class="message-box__title">Customized SLA from Vuetify</h5>
                    <div class="message-box__date">Wednesday, July 19, 2023</div>
                    <p class="message-box__content">
                        Elevate your development team’s capabilities with a personalized support plan that
                        provides direct access to the <strong>Vuetify Core Development team</strong>. Get your
                        questions answered by the experts and receive invaluable guidance for your projects.
                    </p>
                </div>
                <v-btn class="confirm" icon="mdi-check"></v-btn>
            </div>
        </div>
        <div v-show="!isClose" :style="{ top: `${position.y}px`, left: `${position.x}px` }" class="chat-box">
            <div class="chat-header" @mousedown="handleMouseDonw" @mousemove="handleMouseMove" @mouseup="listenerUp">
                <p>chat</p>
                <v-btn @click="handleClose" class="chat-box__close" icon="mdi-close" rounded="0" size="small"></v-btn>
            </div>
            <div class="chat-bottom">
                <div class="chat-left__side">
                    <div class="user-info">
                        <img src="@/assets/avatar.jpg" alt="">
                        <span>xxyCoder</span>
                    </div>
                    <div class="searchOrAdd">
                        <input type="search" placeholder="搜索朋友" />
                        <button>+</button>
                    </div>
                    <div class="friend-list">
                        <div class="user-info">
                            <img src="@/assets/avatar.jpg" alt="">
                            <span>xxyCoder</span>
                        </div>
                    </div>
                </div>
                <div class="chat-content">
                    <div class="content-show"></div>
                    <div class="content-input">
                        <textarea></textarea><button>发送</button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue';
import { useRouter } from 'vue-router';

const message = ref(1);
const showList = ref(false);
const isDragging = ref(false);
const isClose = ref(true);
const dragStartX = ref(0);
const dragStartY = ref(0);
const position = reactive({ x: 50, y: 50 });
const router = useRouter();

const listenerShow = () => {
    showList.value = false;
};
const listenerUp = () => {
    isDragging.value = false;
};

const changeShowToTrue = (e: MouseEvent) => {
    e.stopPropagation();
    showList.value = true;
};

const stopPropagation = (e: MouseEvent) => {
    e.stopPropagation();
}

onMounted(() => {
    document.addEventListener("click", listenerShow);
});
onUnmounted(() => {
    document.removeEventListener("click", listenerShow);
})

const handleMouseDonw = (e: MouseEvent) => {
    isDragging.value = true;
    dragStartX.value = e.clientX;
    dragStartY.value = e.clientY;
}
const handleMouseMove = (e: MouseEvent) => {
    if (isDragging.value) {
        position.x -= dragStartX.value - e.clientX;
        position.y -= dragStartY.value - e.clientY;
        dragStartX.value = e.clientX;
        dragStartY.value = e.clientY;
    }
}
const handleClick = () => {
    router.push({ path: "/" });
}

const handleClose = () => {
    isClose.value = !isClose.value;
}
</script>

<style lang="scss" scoped>
nav {
    padding: .3125rem;
    display: flex;
    background-color: aquamarine;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    height: 50px;
    left: 0;
    right: 0;
    overflow-x: auto;
    top: 0;
    z-index: 1;
}

.nav-left__search {
    display: flex;
    align-items: center;
    text-wrap: nowrap;
}

.home-btn {
    margin-right: .625rem;
}

.nav__search {
    display: flex;
    align-items: center;
}

input[type="search"] {
    border: 1px black solid;
    outline: none;
    padding: 0 .3125rem;
    margin: 0 .375rem;
    font-size: .875rem;
    border-radius: .125rem;
}

a {
    text-decoration: none;
    color: white;
}

.nav-right__info {
    text-wrap: nowrap;
}

.chat {
    margin: 0 .625rem;
}

.message-box {
    background-color: rgb(33, 33, 33);
    color: white;
    position: fixed;
    top: .9375rem;
    right: .9375rem;
    width: 21.25rem;
    max-height: 21.25rem;
    overflow: auto;
}

.message-list {
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding: 10px;
    box-sizing: border-box;
}

.message-list div:first-child {
    margin-right: .625rem;
    margin-top: .625rem;
}

.message-box__main {
    flex: 1;
}

.message-box__title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.message-box__content,
.message-box__date {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.7);
}

.message-box__date {
    margin: .375rem 0;
    font-weight: bold;
}

.message-icon {
    height: 6rem;
    width: 6rem;
    font-size: 6em;
    margin: 1.25rem 0;
}

.confirm {
    background-color: transparent;
    color: rgb(255, 255, 255, 0.7);
}

.chat-box {
    z-index: 2;
    border: 1px solid #ccc;
    position: absolute;
    display: flex;
    width: 37.5rem;
    flex-direction: column;
    height: 18.75rem;
    background-color: #E8E8E8;
}

.chat-header {
    display: flex;
    font-size: .875rem;
    box-sizing: border-box;
    padding: .3125rem .625rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
}

.chat-box__close {
    background-color: transparent;
    box-shadow: none;
    height: auto;
}

.chat-bottom {
    display: grid;
    flex: 1;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 100%;
}

.chat-left__side {
    grid-column: 1;

    overflow-y: auto;
}

.user-info {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    padding: .3125rem .625rem;

    img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
    }

    span {
        font-size: .875rem;
        margin-left: .3125rem;
    }
}

.searchOrAdd {
    padding: .625rem 0;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    display: flex;

    input {
        width: 75%;
    }
}

.chat-content {
    background-color: #fff;
    grid-column: 2 / span 3;
    display: flex;
    flex-direction: column;
}

.content-show {
    flex: 1;
}

.content-input {
    height: 5rem;
    border-top: 1px solid #ccc;

    textarea {
        resize: none;
        font-size: .75rem;
        outline: none;
        width: 100%;
        height: 80%;
        vertical-align: top;
    }

    button {
        font-size: .625rem;
        display: block;
        margin-right: .3125rem;
        float: right;
    }
}
</style>