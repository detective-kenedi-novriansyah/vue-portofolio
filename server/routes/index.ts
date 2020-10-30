import Vue from 'vue';
import VueRouter from 'vue-router';
import BaseHome from '../component/home/Basehome.vue';
import BaseLogin from '../component/auth/baselogin.vue';
import BaseRecord from '../component/auth/baserecord.vue';
import BaseForgot from '../component/auth/baseforgot.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: BaseHome,
}, {
    path: '/login',
    component: BaseLogin,
}, {
    path: '/register',
    component: BaseRecord,
}, {
    path: '/forgot',
    component: BaseForgot,
}];

export default new VueRouter({
    routes,
});
