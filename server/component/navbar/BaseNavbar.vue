<template>
    <nav class="h-16 w-full flex items-center shadow" id="navbardwqdwqkdmwqkdmwqkdq">
        <vs-button v-if="!is_authenticate.avatar" transparent id="button-destroy" v-on:click="handleClickHistory('/login')">
            <a id="button-text">
                {{allSchema.button ? allSchema.button.signin: ''}}
            </a>
        </vs-button>
        <vs-avatar v-if="is_authenticate.avatar" circle class="cursor-pointer" history history-gradient>
            <img :src="is_authenticate.avatar ?  'https://backends-46f3d8d3db06b1debd9f2.herokuapp.com' + is_authenticate.avatar : ''" alt="">
        </vs-avatar>
        <div class="flex-1">
        </div>
        <vs-navbar-group>
            <vs-button 
                shadow
                animation-type="rotate">
                <a id="button-text-branch">
                    Kenedi Novriansyah
                </a>
                <template #animate >
                    Get Contact Kenedi
                </template>
            </vs-button>
            <template #items color>
                <vs-button v-on:click="handleSave(allSchema.my ? allSchema.my.contactPhoneWa : '')" class="mb-1" shadow>{{allSchema.my ? allSchema.my.savePhone : ''}}</vs-button>
                <vs-button v-on:click="handleSave(allSchema.my ? allSchema.my.email : '')" shadow>{{allSchema.my ? allSchema.my.saveEmail : ''}}</vs-button>
            </template>
        </vs-navbar-group>
        <div class="flex-1"></div>
        <vs-button transparent id="button-destroy">
            <a id="button-text">
                News
            </a>
        </vs-button>
        <vs-button transparent id="button-destroy">
            <a id="button-text">
                Technology
            </a>
        </vs-button>
        <vs-button transparent id="button-destroy">
            <a id="button-text">
                Health
            </a>
        </vs-button>
        <vs-button 
            class="flex items-center"
            id="button-destroy-show"
            icon
            color="rgb(141, 103, 72)"
            gradient
            v-on:click="handleClickVisible">
            <i class="fas fa-bars"></i>
        </vs-button>
        <vs-sidebar :class="active_ ? 'show-hidden' : 'hidden'"
            absolute
            v-model="active"
            open>
            <vs-sidebar-item id="news">
                News
            </vs-sidebar-item>
            <vs-sidebar-item id="tech">
                Technology
            </vs-sidebar-item>
            <vs-sidebar-item id="health">
                Health
            </vs-sidebar-item>
        </vs-sidebar>
    </nav>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
    data: () => ({
      active: 'home',
      active_: false,
    }),
    computed: mapGetters(['allSchema', 'is_authenticate']),
    methods: {
        handleClickVisible() {
            this.active_ = !this.active_;
        },
        handleClickHistory(newValue: string): void {
            this.$Loading.start();
            setTimeout(() => {
                this.$Loading.finish();
                this.$router.push(newValue);
            }, 500);
        },
        handleSave(newValue: string): void {
            let success = false;
            const listen = (e: ClipboardEvent | any): void => {
                e.clipboardData.setData('text/plain', newValue);
                e.preventDefault();
                success = true;
            };
            const input = document.createElement('input') as HTMLInputElement;
            document.body.append(input);
            input.select();

            document.addEventListener('copy', listen);
            document.execCommand('copy');
            document.removeEventListener('copy', listen);
            document.body.removeChild(input);
            if (success) {
                this.$Notice.success({
                    title: this.allSchema.my.thanks,
                    render: (h: any) => {
                        return h('span', [
                            this.allSchema.my.validateSuccess.toString(),
                        ]);
                    },
                });
            }
        },
    },
})

export default class BaseNavbar extends Vue {

}
</script>

<style>
@media only screen and (min-width: 768px) {
    #navbardwqdwqkdmwqkdmwqkdq {
        padding-left: 12%;
        padding-right: 12%;
    }
    #button-destroy-show {
        display: none;
        visibility: hidden;
    }
}

@media only screen and (max-width: 767px) {
    #button-destroy {
        display: none;
        visibility: hidden;
    }
    #button-destroy-show {
        visibility: visible;
        display: block;
    }
    #navbardwqdwqkdmwqkdmwqkdq {
        padding-left: 2%;
    }
}

#branch-mdkwqmdwqk {
    font-size: 20px;
    font-weight: bold;
    color: white;
}

#button-text {
    text-decoration: none;
    text-transform: capitalize;
    color: rgb(141, 103, 72) !important;
    font-weight: bold;
    font-size: 16px;
}

#button-text-branch {
    text-decoration: none;
    text-transform: capitalize;
    color: black !important;
    font-weight: bold;
    font-size: 20px;
}

@media only screen and (max-width: 350px) {
    #button-text-branch {
        text-decoration: none;
        text-transform: capitalize;
        color: black !important;
        font-weight: bold;
        font-size: 14px !important;
    }
}

.hidden {
    visibility: hidden;
    display: none;
}

.show-hidden {
    transition: width 2s;
}

.vs-navbar__group__items {
    z-index: 2 !important;
    background-color: white !important;
}
</style>