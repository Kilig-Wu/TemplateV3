import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from '@/router';
import { setupStore } from '@/store';
// 路由守卫
import '@/router/router-guard';

import 'uno.css';
import 'ant-design-vue/dist/reset.css';
import '@/style/ant-reset.less';

const app = createApp(App);

//配置路由
setupRouter(app);
// 配置 store
setupStore(app);

app.mount('#app');
