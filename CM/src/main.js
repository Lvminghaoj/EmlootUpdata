//引入模块集合文件
import Vue from 'vue'
import App from './App'
import router from './router'
import JQ from '@/js/jquery-1.8.1.min.js'
import store from '@/vuex/store'
import { Button } from 'vant';
import Rem from '@/js/rem.js'
import { Tab, Tabs } from 'vant'; //表头标签
import { Uploader } from 'vant'; //文件上传
import { Swipe, SwipeItem } from 'vant'; //轮播
import axios from 'axios'
import { Field } from 'vant';
import { Popup } from 'vant';
import { Picker } from 'vant';
import { RadioGroup, Radio } from 'vant';
import { Toast } from 'vant';
import { DatetimePicker } from 'vant';
import { Dialog } from 'vant'
Vue.use(Dialog)
Vue.use(DatetimePicker)
Vue.use(Toast);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Picker);
Vue.use(Popup)
Vue.use(Uploader);
Vue.use(Tab).use(Tabs);
Vue.use(Button);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Field);
// router.beforeEach((to,  from,  next)  =>  {  
//     const  token  =  window.localStorage.getItem('code');  
//     if  (token)  {      /* 路由发生变化修改页面title */     
//         console.log(to)
//         if  (to.meta.title)  {       document.title  =  to.meta.title;     }    
//         next();
//         if  (to.matched.length  ===  0)  {     //在匹配不上情况下，默认检查name是否为空。不为空默认接着操作
//                    from.name  ?  next({         name:  from.name       })  :  next('/index');     } 
//         else  {       next();     } 
//     } 
//     else  {     
//         const  code =  to.query.code;  
//         const  state =  to.query.state;      
//         if (code) {      
//             window.localStorage.setItem('state', state);        
//             window.localStorage.setItem('code', code);               /* 路由发生变化修改页面title */               
//             if  (to.meta.title)  {                 document.title  =  to.meta.title;               }              
//             next();
//             if  (to.matched.length  ===  0)  {               //在匹配不上情况下，默认检查name是否为空。不为空默认接着操作
//                                  from.name  ?  next({                   name:  from.name                 })  :  next('/CustomerPhone');               } 
//             else  {                 next();               }         
//         } else {              //没值
//             var url = `http://www.powerboy.vip/dist/index.html`;
//             window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0bfb49950f295128&redirect_uri=${url}&response_type=code&scope=snsapi_userinfo&state=STATUS#wechat_redirect`
//         }     
//     }  
//     next();
// })
new Vue({
    render: h => h(App),
    router,
    store,
    Rem,
    JQ,
}).$mount('#app');