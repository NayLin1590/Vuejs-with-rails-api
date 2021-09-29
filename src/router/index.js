import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../pages/user/Login";
import ApplicantList from "../pages/applicantInfo/ApplicantList";
import ApplicantDetail from "../pages/applicantInfo/ApplicantDetail";
import ApplicantForm from "../pages/applicant/ApplicantForm.vue";
import ConfirmForm from "../pages/applicant/ConfirmForm";
import Done from "../pages/applicant/Done";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/applicantinfo",
    name: "applicant-list",
    component: ApplicantList,
  },
  {
    path: "/applicantinfo/:id",
    name: "applicant-detail",
    component: ApplicantDetail,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },

  {
    path: "/confirm",
    name: "confirm",
    component: ConfirmForm,
  },
  {
    path: "/confirm/done",
    name: "done",
    component: Done,
  },
  {
    path: "/",
    name: "applicantform",
    component: ApplicantForm,
  },

  {
    path: "/*",
    redirect: "/post",
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
  if (!store.getters.isData &&
     (to.name == "confirm" || to.name == "done")) {
    return next("/");
  }
  next();

  const loggedIn = store.getters.isLoggedIn;

  if (
    !loggedIn &&
    to.name != "login" &&
    to.name != "applicantform" &&
    to.name != "confirm" &&
    to.name != "done" &&
    (to.name == "applicant-detail" || to.name == "applicant-list")
  ) {
    return next("/login");
  }
  next();
  if (loggedIn && (to.name == "applicantform" || to.name == "login")) {
    return next("/applicantinfo");
  }
  next();
});

export default router;
