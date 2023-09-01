<template>
    <a-form :style="{ width: '500px', margin: 'auto' }" :model="formState" name="basic" autocomplete="off"
        @finish="login">
        <a-form-item label="用户" name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
            <a-input v-model:value="formState.username" />
        </a-form-item>

        <a-form-item label="密码" name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
            <a-input-password v-model:value="formState.password" />
        </a-form-item>
        <a-form-item label="验证码" name="captcha" :rules="[{ required: true, message: 'Please input your captcha!' }]">
            <a-input v-model:value="formState.captcha" src="../../../assets/images/checkcode.png" />
            <img :src="imageCaptcha ? imageCaptcha : checkcode" @click="handleChangeCheckCode"  />
        </a-form-item>
        <a-form-item>
            <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
    </a-form>
</template>
<script lang="ts" setup>
import { getImageCaptcha } from '@/api/system';
import checkcode from '@/assets/images/checkcode.png';
const router = useRouter()
interface UserInfo {
    username: string;
    password: string;
    captcha: string
}
let img= ref<string>('')
const formState = reactive<UserInfo>({
    username: 'admin',
    password: 'smma@2021',
    captcha: ''
});
let { Login } = useUserStore()
const login = async (values: UserInfo) => {
    let params = {
        checkKey: 1629428467008,
        ...values,
    }
    try {
        let res: { homePath: string } = await Login(params) as { homePath: string };
        //跳转首页
        router.push({ path: res.homePath })
    } catch {
        getCaptcha()
    }
};
let imageCaptcha = ref<string>('')
const getCaptcha = async () => {
    let res = await getImageCaptcha(1629428467008);
    if(res) {
        imageCaptcha.value = res;
    }
}
getCaptcha()
const handleChangeCheckCode = () => {
    imageCaptcha.value = '';
    getCaptcha()
}
</script>
