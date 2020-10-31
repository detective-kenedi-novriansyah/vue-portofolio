<template>
    <div id="form-authdkqm" class="flex items-center justify-center">
        <form v-on:submit.prevent="onSubmit">
            <div class="field">
                <div class="control">
                    <vs-button shadow v-on:click="handleClickHistory('/')" type="button">
                        <i class="fas fa-arrow-left"></i>
                        <a class="text-sm font-bold font-sans ml-2">Back Home</a>
                    </vs-button>
                </div>
            </div>
            <div class="field mt-10 mb-4">
                <div class="control">
                    <h1 class="text-xl font-bold text-center text-gray-600">
                        {{allSchema.button ? allSchema.button.uploadBook : ''}}
                    </h1>
                </div>
            </div>
            <div class="field">
                <div class="control is-expanded">
                    <vs-input type="text" v-model="name" :placeholder="allSchema.book ? allSchema.book.name : ''" required autocomplete="off">
                        <template #icon>
                            <i class="fas fa-paragraph"></i>
                        </template>
                    </vs-input>
                </div>
            </div>
            <div class="field">
                <div class="control is-expanded">
                    <Input v-model="description" type="textarea" :rows="4" :placeholder="allSchema.book ? allSchema.book.description : ''" required autocomplete="off"/>
                </div>
            </div>
            <div class="field flex items-center justify-center">
                <div class="control" id="upload-btn-wrapper">
                    <div class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div class="text-center">
                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="mt-1 text-sm text-gray-600">
                            <button class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out">
                            Upload a file
                            </button>
                            or drag and drop
                        </p>
                        <p class="mt-1 text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                        </p>
                        </div>
                    </div>
                    <input type="file" name="images" id="images" ref="images" v-on:change="onChangeImage()">
                </div>
            </div>
            <div class="field">
                <div class="control break-all" id="content-images-label">
                    <p id="label-image" class="text-sm font-bold text-gray-600 cursor-default"></p>
                </div>
            </div>
            <div class="field">
                <div class="control is-expanded">
                    <vs-button type="submit" :loading="loading">
                        <a id="btn-submits">{{allSchema.button ? allSchema.button.submit : ''}}</a>
                    </vs-button>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { AxiosResponse } from 'axios';
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';
@Component({
    data: () => ({
        name: '',
        image: [],
        description: '',
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        loading: false,
    }),
    computed: mapGetters(['allSchema', 'is_authenticate']),
    methods: {
        ...mapActions(['recordBook']),
        handleClickHistory(newValue: string): void {
            this.$Loading.start();
            setTimeout(() => {
                this.$Loading.finish();
                this.$router.push(newValue);
            }, 500);
        },
        onSubmit() {
            const data = new FormData();
            const user: any = this.is_authenticate ? this.is_authenticate.user ? this.is_authenticate.user.id : '' : '';
            data.append('name', this.name);
            data.append('description', this.description);
            data.append('image', this.image[0]);
            data.append('user', user);
            this.loading = true;
            this.recordBook(data).then((res: AxiosResponse<any>) => {
                this.$store.commit('RECORD_BOOK', res.data.book);
                this.loading = false;
                this.$message({
                    message: res.data.message,
                    type: 'success',
                });
                this.name = '';
                this.description = '';
                this.image = [];
                this.$Loading.start();
                setTimeout(() => {
                    this.$Loading.finish();
                    this.$router.push('/');
                }, 500);
            }).catch((err: any) => {
                this.$message.error(err.response.data.image[0]);
                this.loading = false;
            });
        },
        onChangeImage() {
            const files = (this.$refs.images as HTMLInputElement).files;
            if (files) {
                if (files[0]) {
                    this.image = files as any;
                    (document.getElementById('label-image') as HTMLElement).innerHTML = this.image[0].name;
                }
            }
        },
    },
})
export default class Upload extends Vue {}
</script>

<style>
#upload-btn-wrapper {
    position: relative !important;
    overflow: hidden !important;
    display: inline-block !important;
}
#upload-btn-wrapper input[type=file] {
    position: absolute !important;
    width: 100% !important;
    height: 100% !important;
    left: 0 !important;
    top: 0 !important;
    cursor: pointer;
    opacity: 0 !important;
}


@media only screen and (min-width: 768px) {
  #form-authdkqm{
    width: 60%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media only screen and (max-width: 767px) {
    #content-images-label {
        width: 280px;
        display: block;
        margin: auto;
    }
}

@media only screen and (max-width: 320px) {
        #content-images-label {
            width: 190px;
            display: block;
            margin: auto;
        }
}

#btn-submits {
  color: white!important;
  font-weight: bold;
  text-decoration: none;
}

</style>