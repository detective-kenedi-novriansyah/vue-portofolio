<template>
    <div class="px-2">
        <div class="flex items-center">
            <vs-avatar loading badge badge-color="success" badge-position="top-left">
                <img src="https://scontent.fjog2-1.fna.fbcdn.net/v/t1.0-9/122793244_1262924950707590_775817406352586226_o.jpg?_nc_cat=106&ccb=2&_nc_sid=e3f864&_nc_eui2=AeHXtmnv73j-wmzJYC3dJnhBAm5x9evRjhwCbnH169GOHLzUuB90kLaBVsUUw1Uu0J4guvmTMXfS46lr9E-Yvuc8&_nc_ohc=rr3JKSqLf8cAX_DYkEL&_nc_ht=scontent.fjog2-1.fna&oh=5abbea43155de2074c8fce4e74a3fa50&oe=5FC30067" alt="" class="w-32 h-32">
                <template #icons>
                    <Icon type="logo-github" v-on:click="handleClickOpenNewWindow('https://github.com/kenedinovriansyah?tab=repositories')"/>
                    <Icon type="logo-youtube" v-on:click="handleClickOpenNewWindow('https://www.youtube.com/channel/UCiAGAKn6VGst6zLMif9_3rQ?view_as=subscriber')"/>
                </template>
            </vs-avatar>
            <h1 class="font-bold font-sans ml-2">
                Kenedi Novriansyah
            </h1>
        </div>
        <vs-button size="small" v-on:click="handleSave('+6288802718074')">
            <a id="btn-contacts">
                Copy Whatapss phone number
            </a>
        </vs-button>
        <vs-button size="small" v-on:click="handleSave('leemiranerale@gmail.com')">
            <a id="btn-contacts">
                Contact each other by email
            </a>
        </vs-button>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
    methods: {
        handleClickOpenNewWindow(newValue: string): void {
            window.open(newValue);
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
                title: 'Successfully',
                render: (h: any) => {
                    return h('span', ['Thank you for copying']);
                },
                });
            }
        },
    },
})
export default class Contact extends Vue {
}
</script>

<style>
#btn-contacts {
    color: white;
    font-weight: bold;
    text-decoration: none;
}
</style>