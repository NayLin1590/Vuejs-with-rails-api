import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../pages/user/Login";
import PostList from "../pages/post/PostList";
import PostDetail from "../pages/post/PostDetail"
import ApplicantForm from "../pages/applicant/ApplicantForm.vue" 
import Confirm from "../pages/applicant/Confirm"
import Done from "../pages/applicant/Done"
import store from "../store";
// import { component } from "vue/types/umd";

Vue.use(VueRouter);

const routes = [
    {
        path: "/post/list",
        name: "post-list",
        component: PostList,
    },
    {
        path: "/post/list/detail/:id",
        name: "post-detail",
        component: PostDetail,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    
    {
        path: "/confirm",
        name: "confirm",
        component: Confirm,
    },
    {
        path: "/confirm/done",
        name: "done",
        component: Done
    },
    {
        path: "/",
        name: "applicantform",
        component: ApplicantForm,
    },
    
    {
        path: "/*",
        redirect: "/post/list",
    },
   
];

const router = new VueRouter({
    mode: "history",
    routes,
});

/**
 * This is to handle and check authentication for routing.
**/
router.beforeEach((to, from, next) => {

    if( !store.getters.isData && (to.name == "confirm" || to.name == "done")){
        return next("/")
    }
    next();

    const loggedIn = store.getters.isLoggedIn;
   
    if (!loggedIn && to.name != "login" && to.name != "applicantform" && to.name != "confirm" && to.name != "done" && (to.name == "post-detail" || to.name== "post-list")) {
        return next("/login");
    }
    next();
    if(loggedIn && to.name == "applicantform"){
        return next("/post/list")
    }
    next();
    
});

export default router;
