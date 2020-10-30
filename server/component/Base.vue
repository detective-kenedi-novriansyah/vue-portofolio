<template>
    <div>
        <header>
            <Navbar/>
        </header>
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import { mapActions } from 'vuex'
import Navbar from './navbar/BaseNavbar.vue'

@Component({
    components: {
        Navbar
    },
    methods: {
        ...mapActions(['fetchSchema','fetchBook'])
    },
    mounted() {
        this.fetchSchema();
        this.fetchBook();
    }
})
export default class Base extends Vue {

}
</script>

<style>
</style>