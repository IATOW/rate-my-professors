import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueCookies from "vue-cookies"
import axios from "axios"
import VueAxios from "vue-axios"

import global from "./global"

import "vue-awesome/icons/flag"
import "vue-awesome/icons"
import Icon from "vue-awesome/components/Icon"

import "@/styles/font.css"
import MainPage from "@/components/main-page/MainPage";
import HomePage from "@/components/main-page/HomePage";
import FrontPage from "@/components/front-page/FrontPage";
import FindTeacherPage from "@/components/main-page/FindTeacherPage";
import ApplyTeacher from "@/components/main-page/ApplyTeacher";
import TeacherInfo from "@/components/main-page/accessory/TeacherInfo";

Vue.use(VueRouter);
Vue.use(VueCookies);
axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios);
Vue.component("v-icon", Icon);
Vue.prototype.global = global;

Vue.config.productionTip = false;


const routes = [
    {path: "/home", component: FrontPage},
    {
        path: "/rate",
        component: MainPage,
        children: [
            {
                path: "home",
                component: HomePage
            },
            {
                path: "",
                component: HomePage
            },
            {
                path: "find-teacher",
                component: FindTeacherPage
            },
            {
                path: "apply-teacher",
                component: ApplyTeacher
            },
            {
                path: "teacher-info-test/:pid",
                component: TeacherInfo
            }
        ]
    }
];
const router = new VueRouter({
    routes
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
