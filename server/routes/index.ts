import Vue from 'vue';
import VueRouter from 'vue-router';
import BaseHome from '../component/home/BaseHome.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: BaseHome,
}];

export default new VueRouter({
    routes,
});
