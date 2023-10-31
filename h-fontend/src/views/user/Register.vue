<template>
    <form @submit.prevent="submit">
        <v-text-field variant="outlined" clearable placeholder="请输入用户名" v-model="name.value.value" :counter="10"
            :error-messages="name.errorMessage.value" label="Name"></v-text-field>

        <v-text-field type="password" variant="outlined" clearable placeholder="请输入密码" v-model="password.value.value"
            :counter="10" :error-messages="password.errorMessage.value" label="Password"></v-text-field>

        <v-text-field type="password" variant="outlined" clearable placeholder="请确认密码" v-model="confirmPassword.value.value"
            :counter="10" :error-messages="confirmPassword.errorMessage.value" label="Confirm Password"></v-text-field>

        <v-text-field variant="outlined" clearable placeholder="请输入电话号码" v-model="phone.value.value" :counter="7"
            :error-messages="phone.errorMessage.value" label="Phone Number"></v-text-field>

        <v-text-field variant="outlined" clearable placeholder="请输入邮箱" v-model="email.value.value"
            :error-messages="email.errorMessage.value" label="E-mail"></v-text-field>

        <v-checkbox v-model="checkbox.value.value" :error-messages="checkbox.errorMessage.value" value="1"
            label="同意用户协议及隐式政策" type="checkbox"></v-checkbox>

        <v-btn class="me-4" type="submit">
            register
        </v-btn>

        <v-btn @click="handleReset">
            clear
        </v-btn>
    </form>
</template>
<script setup lang="ts">
import { useField, useForm } from 'vee-validate'

const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        name(value: string) {
            if (value?.length >= 2) return true

            return '名字至少两个字母';
        },
        phone(value: string) {
            if (value?.length > 9 && /[0-9-]+/.test(value)) return true

            return '电话号码需要至少9位.'
        },
        email(value: string) {
            if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

            return '请输入有效邮箱'
        },
        checkbox(value: string) {
            if (value === '1') return true

            return '还未勾选同意'
        },
        password(value: string) {
            if (value?.length > 5) return true;

            return "密码长度至少6位"
        },
        confirmPassword(value: string) {
            if (password.value.value === value) return true;

            return "两次密码不一致"
        }
    },
})
const name = useField<string>('name')
const password = useField<string>("password");
const confirmPassword = useField<string>("confirmPassword");
const phone = useField<string>('phone')
const email = useField<string>('email')
const checkbox = useField<string>('checkbox')


const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
})
</script>