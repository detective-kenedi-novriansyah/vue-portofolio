<template>
    <div>
        <header>
            <Navbar/>
        </header>
        <section class="mb-64">
            <transition name="slide">
                <router-view></router-view>
            </transition>
        </section>
    </div>
</template>

<script lang="ts">
import { AxiosResponse } from 'axios';
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';
import Navbar from './navbar/BaseNavbar.vue';

@Component({
    components: {
        Navbar,
    },
    methods: {
        ...mapActions(['fetchSchema', 'fetchBook', 'loadIsAuthenticated']),
    },
    mounted() {
        this.fetchSchema();
        this.fetchBook();
        if (localStorage.getItem('token')) {
            this.loadIsAuthenticated().then((res: AxiosResponse<any>) => {
                this.$store.commit('LOAD_AUTH', res.data);
            });
        }
    },
})
export default class Base extends Vue {

}
</script>

<style>
</style>