import Vue from 'vue';
import Base from './component/Base.vue';
import 'iview/dist/styles/iview.css';
import IView from 'iview';
import Vuesax from 'vuesax';
import './assets/tailwind.css';
import 'vuesax/dist/vuesax.css';
import router from './routes';
import store from './modules';
import 'bulma';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/custom.scss';

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(Vuesax);
Vue.use(IView);
Vue.use(ElementUI);

new Vue({
    router,
    store,
    render: (h) => h(Base),
}).$mount('#app');
