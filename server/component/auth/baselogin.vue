<template>
  <div>
    <div class="flex items-center justify-center py-4">
      <vs-button class="flex items-center w-64" v-on:click="handleClickHistory('/')">
        <i class="fas fa-arrow-left"></i>
        <a id="btn-backdkqwmdkqw" class="ml-2">Back</a>
      </vs-button>
    </div>
      <div class="flex items-center justify-center">
      <form v-on:submit.prevent="onSubmit" id="form-authdkqm">
        <div class="field">
          <div class="control">
            <h1 class="text-xl font-bold text-center">
              {{allSchema.button ? allSchema.button.titleLogin : ''}}
            </h1>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <vs-input type="text" :placeholder="allSchema.auth ? allSchema.auth.user.username : ''" v-model="username" required autocomplete="off">
              <template #icon>
                <i class="fas fa-user-circle"></i>
              </template>
            </vs-input>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <vs-input type="password" :placeholder="allSchema.auth ? allSchema.auth.user.password : ''" v-model="password" required autocomplete="off">
              <template #icon>
                <i class="fas fa-lock"></i>
              </template>
            </vs-input>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <vs-button transparent>
              <a>
                {{allSchema.button ? allSchema.button.forgot : ''}}
              </a>
            </vs-button>
          </div>
        </div>
        <div class="field has-addons flex items-center">
          <div class="control">
            <vs-button :loading="loadingButtonUser">
              <a id="btn-submits">{{allSchema.button ? allSchema.button.login : ''}}</a>
            </vs-button>
          </div>
          <div class="control">
            <vs-button>
              <a id="btn-submits">{{allSchema.button ? allSchema.button.createNewAccount : ''}}</a>
            </vs-button>
          </div>
        </div>
      </form>
      </div>
  </div>
</template>

<script lang="ts">
import { AxiosResponse } from 'axios';
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';

@Component({
  data: () => ({
    username: '',
    password: '',
  }),
  computed: {
    ...mapGetters(['allSchema', 'loadingButtonUser', 'validateUser']),
  },
  methods: {
    ...mapActions(['requestUser']),
    handleClickHistory(newValue): void {
      this.$Loading.start();
      setTimeout(() => {
          this.$Loading.finish();
          this.$router.push(newValue);
      }, 500);
    },
    onSubmit() {
      const data = {
        username: this.username,
        password: this.password,
      };
      this.$store.commit('REQUEST_USER_COMPLETE', true);
      this.$store.dispatch('requestUser', data).then((res: AxiosResponse<any>) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('token$', res.data.user_id);
        this.$store.commit('REQUEST_USER_COMPLETE', false);
        window.location.reload();
      }).catch((err: any) => {
        this.$Message.error(err.response.data.nonFieldErrors[0]);
        this.$store.commit('REQUEST_USER_COMPLETE', false);
      });
    },
  },
  mounted() {
    const input = document.querySelector('input') as HTMLInputElement;
    input.focus();
  },
})
export default class BaseLogin extends Vue {}
</script>

<style>
#btn-backdkqwmdkqw {
  color: white!important;
  font-weight: bold;
}
#btn-submits {
  color: white!important;
  font-weight: bold;
  text-decoration: none;
}

@media only screen and (min-width: 768px) {
  #form-authdkqm{
    width: 60%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

</style>