<template>
    <vs-navbar color="white" text-white square>
    </vs-navbar>
</template>

<script>
import {Vue, Component} from 'vue-property-decorator'
import { mapGetters } from 'vuex';

@Component({
    computed: mapGetters(['allSchema'])
})

export default class BaseNavbar extends Vue {

}
</script>

<style>

</style>