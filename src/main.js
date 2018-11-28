import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'   //to use json server
import VueRouter from 'vue-router'        //change between pages (SPA)
import Routes from './routes'              //change between pages (SPA)


Vue.use(vueResource);
Vue.use(VueRouter);


const router = new VueRouter({
    routes: Routes,
    mode: "history"
});



new Vue({
    el: '#app',
    render: h => h(App),
    router: router
})