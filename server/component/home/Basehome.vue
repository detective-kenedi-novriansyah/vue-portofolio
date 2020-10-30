<template>
    <div class="mt-12">
        <div id="container">
            <div id="content-image">
                <div id="background-color-image">
                    <div id="rotate">
                        <img :src="allSchema.my ? allSchema.my.avatar : ''" alt="" class="w-64 h-64 rounded-full block m-auto" id="my-avatar">
                        <div class="flex items-center justify-center my-12">
                            <vs-button block shadow>
                                {{allSchema.my ? allSchema.my.about : ''}}
                            </vs-button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content">
                <div id="contents">
                    <div id="content-text">{{allSchema.my ? allSchema.my.hai : ''}}</div>
                    <div id="content-text">{{allSchema.my ? allSchema.my.username : ''}}</div>
                </div>
                <div id="content-text">{{allSchema.my ? allSchema.my.job : ''}}</div>
            </div>
        </div>
        <div class="mt-10 mb-6">
            <div class="block m-auto cursor-default text-2xl font-bold text-center font-sans bg-red-600 uppercase shadow rounded-full w-64 text-white py-1 px-2">
                {{allSchema.my ? allSchema.my.skill : ''}}
            </div>
        </div>
        <div class="flex items-center justify-center flex-wrap">
            <div v-for="book in allBook" :key="book.id">
                <div id="card-skill">
                    <img :src="book.image" alt="" class="w-20 h-20 rounded">
                    <div id="text">{{book.name}}</div>
                    <div id="description">{{book.description}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

@Component({
    computed: mapGetters(['allSchema', 'allBook']),
})
export default class BaseHome extends Vue {}
</script>

<style>
@media only screen and (min-width: 850px) {
    #background-color-image {
        background-color: red;
        width: 460px;
        height: 460px;
        display: block;
        margin: auto;
        border-radius: 84% 16% 53% 47% / 56% 17% 83% 44%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 10px 10px 5px #aaaaaa;
    }
}
@media only screen and (max-width: 849px) and (min-width: 768px) {
    #background-color-image {
        background-color: red;
        width: 360px;
        height: 360px;
        display: block;
        margin: auto;
        border-radius: 84% 16% 53% 47% / 56% 17% 83% 44%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 10px 10px 5px #aaaaaa;
    }
}
@media only screen and (max-width: 767px) {
    #background-color-image {
        background-color: red;
        width: 320px;
        height: 320px;
        display: block;
        margin: auto;
        border-radius: 84% 16% 53% 47% / 56% 17% 83% 44%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 4.90%;
        box-shadow: 10px 10px 5px #aaaaaa;
    }
}

@media only screen and (max-width: 320px) {
    #background-color-image {
        background-color: red;
        width: 280px;
        height: 280px;
        display: block;
        margin: auto;
        border-radius: 84% 16% 53% 47% / 56% 17% 83% 44%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 4.90%;
        box-shadow: 10px 10px 5px #aaaaaa;
    }
}

#content-image {
  width: 100%;
}

@media only screen and (min-width: 850px) {
    #container {
        margin-left: 1.5%;
        margin-right: 1.5%;
        display: flex;
        align-items: center;
        z-index: -1;
    }
}
@media only screen and (max-width: 849px) and (min-width: 768px) {
    #container {
        margin-left: 1.5%;
        margin-right: 1.5%;
        display: flex;
        align-items: center;
        z-index: -1;
    }
}

@media only screen and (min-width: 768px) {
    #content {
        width: 100%;
    }
}
@media only screen and (max-width: 767px) {
    #content {
        width: 80%;
        display: block;
        margin: auto;
    }
}

#contents {
    display: flex;
    align-items: center;
}

@media only screen and (min-width: 850px) {
    #content-text {
        font-size: 24px;
        font-weight: bold;
        text-transform: capitalize;
    }
}
@media only screen and (max-width: 849px) and (min-width: 768px) {
    #content-text {
        font-size: 18px;
        font-weight: bold;
        text-transform: capitalize;
    }
}
@media only screen and (max-width: 767px) {
    #content-text {
        font-size: 16px;
        font-weight: bold;
        text-transform: capitalize;
    }
}

#navbar {
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 20px;
    padding-bottom: 40px;
}

#rotate {
    -ms-transform: rotate(40deg); /* IE 9 */
    -webkit-transform: rotate(40deg); /* Safari */
    transform: rotate(40deg);
}

@media only screen and (min-width: 768px) {
    #card-skill {
        width: 360px;
        margin: 6px;
    }
}
@media only screen and (max-width: 767px) {
    #card-skill {
        width: 100%;
        margin: 6px;
    }
}

#text {
    font-size: 1.25rem;
    font-weight: 700;
    text-transform: capitalize;
}

#description {
    color: #546e7a;
    font-size: 1rem;
    font-family: Lato;
    font-weight: 400;
    line-height: 1.5;
}

@media only screen and (min-width: 768px) {
  #menu-course {
    width: 460px;
  }
  #menu-course-list {
    max-height: 380px;
    overflow-y: auto;
    overflow-x: hidden;
  }
}

@media only screen and (max-width: 767px) {
  #menu-course {
    width: 310px;
  }
  #menu-course-list {
    max-height: 290px;
    overflow-y: auto;
    overflow-x: hidden;
  }
}

@media only screen and (max-width: 767px) {
  #my-avatar {
    width: 180px !important;
    height: 180px !important;
  }

  #my-button {
    width: 180px;
  }
}

@media only screen and (min-width: 850px) {
  #my-button {
    width: 300px;
  }
}

@media only screen and (max-width: 849px) and (min-width: 768px) {
  #my-avatar {
    width: 210px !important;
    height: 210px !important;
  }
  #my-button {
    width: 210px;
  }
}

@media only screen and (max-width: 320px) {
  #my-avatar {
    width: 140px !important;
    height: 140px !important;
  }
  #my-button {
    width: 140px;
  }
}
</style>