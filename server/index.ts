import Vue from 'vue';
import Base from './component/Base.vue';
import 'iview/dist/styles/iview.css';
import IView from 'iview';
import Vuesax from 'vuesax';
import './assets/tailwind.css';
import 'vuesax/dist/vuesax.css';
import router from './routes';
import store from './modules';

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(Vuesax);
Vue.use(IView);

new Vue({
    router,
    store,
    render: (h) => h(Base),
}).$mount('#app');
