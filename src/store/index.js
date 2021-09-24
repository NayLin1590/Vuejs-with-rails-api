import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";
import router from '../router' 
// import VueRouter from "vue-router";

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
        setErrorData(state, errMsg){
            state.errMsg = errMsg;
        },
        setApplicantData(state, applicantsData){
            state.applicantsData = applicantsData
        },
        setValidateError(state, error){
            state.userValidationErrors = error
        },
        setImgFile(state , imgFile){
            state.imgFile = imgFile;
        }
        ,
        appendPost(state, imgFile){
            state.imgFile = imgFile
        }
    },

    actions: {
        createPost({ commit }, formData) {
            try {
            return axios.post("/api/applicants/create",  formData)
                .then(data =>{
                    if(data){
                        router.push({ name: "done" });
                    
                        commit("setApplicantData", null);
                        commit("setImgFile",null)
                    }               
                })
                .catch(err=>{
                    console.log(err)       
                });         
            
            } catch (e) {
            console.error(e);
            }
        },
        confirm({ commit }, userData){
            return axios.post("api/applicants/confirm" , userData)
                .then(data => {
                    if(data){
                        commit("setApplicantData",userData)
                    }
                    router.push({ name: "confirm" });
                })
                .catch((err)=>{
                    // console.log(err.response.data);
                    commit("setValidateError", err.response.data);
                })
        },
        
        //Read all

        imgFile({ commit }, imgFile){
            commit("setImgFile",imgFile)
        },
        login({ commit }, credentials) {
            return axios.post("/auth/login", credentials).then(data=>{
                this.errMsg = null
                commit("setUserData",data);
            })
            .catch( err => {
                commit("setErrorData", err.response.data.error);
            })
        },
        logout({ commit }) {
            // return axios.post("/auth/logout", credentials).then(() => {
            //     commit("setUserData", null);
            // });
            commit("setUserData", null)
            commit("setErrorData",null)
        },
        cancel({ commit }) {
            commit("setApplicantData", null);
            commit("setImgFile", null)
        }
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


