<script setup lang="ts">
import { buiredPoint } from '@/api/report';
import { userLogin } from '@/api/users';
import { useLoading } from '@/components/Loading/index.ts';
import { useToast } from '@/components/Toast/index.ts';
import { useField, useForm } from 'vee-validate'
import { setToken, cryptoPassword, setUsername } from "@/utils/user"
import { useRouter } from 'vue-router';

const router = useRouter()

const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        name(value: string) {
            if (value?.length >= 2) return true
            return '名字至少两个字母';
        },
        password(value: string) {
            if (value?.length > 5) return true;
            return "密码长度至少6位"
        }
    }
});
const name = useField<string>('name')
const password = useField<string>("password");

const submit = handleSubmit(values => {
    const remove = useLoading()
    values.password = cryptoPassword(values.password);
    userLogin("", { account: values.name, password: values.password })
        .then(res => {
            remove();
            useToast(res.msg || "登录成功", res.code === 200 ? "normal" : "error");
            if (res.code !== 200) return;
            setToken(res.data!.token);
            setUsername(res.data!.username)
            router.replace("/")
        })
        .catch(err => {
            remove();
            useToast(err, "error");
            buiredPoint("", err);
        })
});
const gotoRegister = (e: MouseEvent) => {
    e.preventDefault()
    router.replace("/register")
}
</script>

<template>
    <div class="user-loginOrRegis__background">
        <h2>登录</h2>
        <form @submit.prevent="submit">
            <v-text-field variant="outlined" clearable placeholder="请输入用户名" v-model="name.value.value" :counter="10"
                :error-messages="name.errorMessage.value" label="Name"></v-text-field>
            <v-text-field type="password" variant="outlined" clearable placeholder="请输入密码" v-model="password.value.value"
                :counter="10" :error-messages="password.errorMessage.value" label="Password"></v-text-field>
            <a @click="gotoRegister">还没有注册？去注册</a>
            <v-btn class="me-4" type="submit">login</v-btn>
            <v-btn @click="handleReset">clear</v-btn>
        </form>
    </div>
</template>

<style scoped lang="scss">
@import "../../styles/user/common.scss";
</style>