// 1. Make sure to import 'vue' before declaring augmented types
import { Auth } from '../modules/constant/interface';
import Vue from 'vue';

// 2. Specify a file with the types you want to augment
//    Vue has the constructor type in types/vue.d.ts
declare module 'vue/types/vue' {
  // 3. Declare augmentation for Vue
  interface Vue {
        $vs: any;
        active_: boolean;
        username: string;
        email: string;
        first_name: string;
        last_name: string;
        password: string;
        confirm_password: string;
        name: string;
        image: any[];
        description: string;
        dialogImageUrl: string;
        dialogVisible: boolean;
        loading: boolean;
        is_authenticate: Auth;

        $store: any;
        $Message: any;

        fetchBook: any;
        fetchSchema: any;
        requestUser: any;
        validateUser: any;
        loadIsAuthenticated: any;
        allSchema: any;
        recordBook: any;
  }
}

// ComponentOptions is declared in types/options.d.ts
declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        myOption?: string;
    }
  }
