<template>
    <div class="user-loginOrRegis__background">
        <h2>登录</h2>
        <form @submit.prevent="submit">
            <v-text-field variant="outlined" clearable placeholder="请输入用户名" v-model="name.value.value" :counter="10"
                :error-messages="name.errorMessage.value" label="Name"></v-text-field>
            <v-text-field type="password" variant="outlined" clearable placeholder="请输入密码" v-model="password.value.value"
                :counter="10" :error-messages="password.errorMessage.value" label="Password"></v-text-field>
            <v-btn class="me-4" type="submit">login</v-btn>
            <v-btn class="me-4" @click="gotoRegister">register</v-btn>
            <v-btn @click="handleReset">clear</v-btn>
        </form>
    </div>
</template>
<script setup lang="ts">
import { buiredPoint } from '@/api/report';
import { userLogin } from '@/api/users';
import { useLoading } from '@/components/Loading/index.ts';
import { useToast } from '@/components/Toast/index.ts';
import { useField, useForm } from 'vee-validate'
import { setToken } from "@/utils/token.ts"
import { useRouter } from 'vue-router';
import { cryptoPassword } from '@/utils/crypto';

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
    userLogin("", { account: values.account, password: values.password })
        .then(res => {
            remove();
            if (res.code !== 0) return Promise.reject({ message: res.msg });
            setToken(res.data!.token)
        })
        .catch(err => {
            remove();
            useToast(err.message, "error");
            buiredPoint("", err);
        })
});
const gotoRegister = () => {
    router.replace("/register")
}
</script>

<style scoped lang="scss">
@import "../../styles/user/common.scss";
</style>