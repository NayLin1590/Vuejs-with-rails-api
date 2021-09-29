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
        /**
         * set user data to user state for login to enter dashboard
         * @param {*} state 
         * @param { object } userData email & password to login
         */
        setUserData(state, userData) {
            state.user = userData;
        },
        /**
         * set error message if the login fail
         * @param {*} state 
         * @param { object } errMsg error message for login validation fail
         */
        setErrorData(state, errMsg) {
            state.errMsg = errMsg;
        },
        /**
         * set all the applicants data to "applicantsData" state to show the admin
         * @param {*} state 
         * @param { object } applicantsData all applicant data from database
         */
        setApplicantData(state, applicantsData) {
            state.applicantsData = applicantsData;
        },
        /**
         * set the error message if the submit applicant data is invalid
         * @param {*} state 
         * @param { object } error error message for applicant data validation fail
         */
        setValidateError(state, error) {
            state.userValidationErrors = error;
        },
        /**
         * set the image file to show the confirm form 
         * @param {*} state 
         * @param {*} imgFile image file from user input
         */
        setImgFile(state, imgFile) {
            state.imgFile = imgFile;
        },
    },

    actions: {
        /**
         * This is to create applicant and push route to 'done'
         * @param { * } commit
         * @param {object} formData the applicant value to save
         * @returns void
         */
        createApplicant({
            commit
        }, formData) {
            try {
                axios
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
            } catch (error) {
                console.error(error);
            }
        },

        /**
         * this is to confirm applicant data before save and push route after confirm
         * @param {*} commit to mutate the applicant data
         * @param { object } applicantData all information of the new applicant
         * @returns void
         */
        validateApplicant({
            commit
        }, applicantData) {
            axios
                .post("api/applicants/validate", applicantData)
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
         * this is to create img file for confirm UI
         * @param {*} commit to mutate the img file
         * @param {object} imgFile the img file of the new applicant submittion
         * @returns void
         */
        createImgFile({
            commit
        }, imgFile) {
            commit("setImgFile", imgFile);
        },
        /**
         * to get the userdata and token 
         * @param {*} commit 
         * @param { object } credentials user information to login
         * @returns void
         */
        login({
            commit
        }, userData) {
            axios
                .post("/auth/login", userData)
                .then((data) => {
                    commit("setErrorData", null);
                    commit("setUserData", data);
                    router.push({
                        name: "applicant-list",
                    });
                })
                .catch((err) => {
                    commit("setErrorData", err.response.data.error);
                });
        },
        /**
         * to set null data 
         * @param {*} commit to mutate the userData 
         * @returns void
         */
        logout({
            commit
        }) {
            commit("setUserData", null);
            commit("setErrorData", null);
        },
        /**
         * to set null data 
         * @param {*} commit to mutate applicant data and img file
         * @returns void
         */
        cancelApplicant({
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
        userEmail: (state) => {
            if (state.user && state.user.data.user.email) {
                return state.user.data.user.email;
            }
        },
    },
    plugins: [createPersistedState()],
});