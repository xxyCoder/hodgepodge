<script setup lang="ts">
import { userRegistry } from '@/api/users';
import { buiredPoint } from "@/api/report.ts"
import { useLoading } from "@/components/Loading/index.ts"
import { useToast } from '@/components/Toast/index.ts';
import { useField, useForm } from 'vee-validate'
import { useRouter } from 'vue-router';
import { cryptoPassword } from '@/utils/crypto';

const { handleReset, handleSubmit } = useForm({
    validationSchema: {
        name(value: string) {
            if (value?.length >= 2) return true
            return '名字至少两个字母';
        },
        account(value: string) {
            if (value?.length >= 6) return true;
            return '账户至少六个字母';
        },
        checkbox(value: string) {
            if (value === '1') return true
            return '还未勾选同意'
        },
        password(value: string) {
            if (value?.length > 5) return true;
            return "密码长度至少六位"
        },
        confirmPassword(value: string) {
            if (password.value.value === value) return true;
            return "两次密码不一致"
        }
    },
})
const name = useField<string>('name')
const account = useField<string>('account')
const password = useField<string>("password");
const confirmPassword = useField<string>("confirmPassword");
const checkbox = useField<string>('checkbox')
const router = useRouter();

const submit = handleSubmit(values => {
    const remove = useLoading()
    values.password = cryptoPassword(values.password);
    userRegistry("", { username: values.name, account: values.account, password: values.password })
        .then(res => {
            useToast(res.msg || "注册成功", res.code === 200 ? "normal" : "error");
            if (res.code !== 200) return;
            remove();
            router.replace("/login");
        })
        .catch(err => {
            remove();
            useToast('网络错误', "error");
            buiredPoint("", err)
        });
});
const gotoLogin = (e: MouseEvent) => {
    e.preventDefault();
    router.replace("/login");
}
</script>

<template>
    <div class="user-loginOrRegis__background">
        <h2>注册</h2>
        <form @submit.prevent="submit">
            <v-text-field variant="outlined" clearable placeholder="请输入用户名" v-model="name.value.value" :counter="10"
                :error-messages="name.errorMessage.value" label="Name" />
            <v-text-field variant="outlined" clearable placeholder="请输入账户" v-model="account.value.value" :counter="10"
                :error-messages="account.errorMessage.value" label="Account" />
            <v-text-field type="password" variant="outlined" clearable placeholder="请输入密码" v-model="password.value.value"
                :counter="10" :error-messages="password.errorMessage.value" label="Password" />
            <v-text-field type="password" variant="outlined" clearable placeholder="请确认密码"
                v-model="confirmPassword.value.value" :counter="10" :error-messages="confirmPassword.errorMessage.value"
                label="Confirm Password" />
            <v-checkbox v-model="checkbox.value.value" :error-messages="checkbox.errorMessage.value" value="1"
                label="同意用户协议及隐式政策" type="checkbox" />
            <a @click="gotoLogin">已有账号？去登录</a>
            <v-btn class="me-4" type="submit">register</v-btn>
            <v-btn @click="handleReset">clear</v-btn>
        </form>
    </div>
</template>

<style scoped lang="scss">
@import "../../styles/user/common.scss";
</style>