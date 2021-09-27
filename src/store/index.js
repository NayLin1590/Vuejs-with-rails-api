import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";
import router from "../router";

Vue.use(Vuex);

axios.defaults.baseURL = process.env.VUE_APP_SERVER;

export default new Vuex.Store({
    state: {
        user: null,
        errMsg: "",
        userValidationErrors: null,
        applicantsData: null,
        imgFile: [],
    },
    mutations: {
        setUserData(state, userData) {
            state.user = userData;
        },
        setErrorData(state, errMsg) {
            state.errMsg = errMsg;
        },
        setApplicantData(state, applicantsData) {
            state.applicantsData = applicantsData;
        },
        setValidateError(state, error) {
            state.userValidationErrors = error;
        },
        setImgFile(state, imgFile) {
            state.imgFile = imgFile;
        },
    },

    actions: {
        /**
         * createApplicant
         * This is to create applicant and push route to 'done'
         * @param {object} formData the applicant value to save
         * @return
         */
        createApplicant({
            commit
        }, formData) {
            try {
                return axios
                    .post("/api/applicants/create", formData)
                    .then((data) => {
                        if (data) {
                            router.push({
                                name: "done",
                            });
                            commit("setApplicantData", null);
                            commit("setImgFile", null);
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } catch (e) {
                console.error(e);
            }
        },
        /**
         * confirm
         * this is to confirm applicant data before save and push route to confirm
         * @param {object} applicantData the all info of submit applicant
         * @return
         */
        confirm({
            commit
        }, applicantData) {
            return axios
                .post("api/applicants/confirm", applicantData)
                .then((data) => {
                    if (data) {
                        commit("setApplicantData", applicantData);
                        commit("setValidateError", null);
                    }
                    router.push({
                        name: "confirm",
                    });
                })
                .catch((err) => {
                    commit("setValidateError", err.response.data);
                });
        },
        /**
         * imgFile
         * this is to store img file to the stae
         * @param {object} imgFile the img file of user
         * @return
         */
        imgFile({
            commit
        }, imgFile) {
            commit("setImgFile", imgFile);
        },
        /**
         * login
         * @return
         */
        login({
            commit
        }, credentials) {
            return axios
                .post("/auth/login", credentials)
                .then((data) => {
                    this.errMsg = null;
                    commit("setUserData", data);
                })
                .catch((err) => {
                    commit("setErrorData", err.response.data.error);
                });
        },
        /**
         * Logout
         * @return
         */
        logout({
            commit
        }) {
            commit("setUserData", null);
            commit("setErrorData", null);
        },
        /**
         * cancel
         * @return
         */
        cancel({
            commit
        }) {
            commit("setApplicantData", null);
            commit("setImgFile", null);
        },
    },
    getters: {
        isData: (state) => !!state.applicantsData,
        isLoggedIn: (state) => !!state.user,
        userType: (state) => {
            if (state.user && state.user.data.user_type) {
                return state.user.data.user_type;
            }
            return -1;
        },
        userId: (state) => {
            if (state.user && state.user.data.user_id) {
                return state.user.data.user_id;
            }
        },
        userName: (state) => {
            // console.log(state)
            if (state.user && state.user.data.user.email) {
                return state.user.data.user.email;
            }
        },
    },
    plugins: [createPersistedState()],
});