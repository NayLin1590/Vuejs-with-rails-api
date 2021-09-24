import {
    mapGetters
} from "vuex";
import axios from "axios"
export default {
    data() {
        return {
            postInfo: null,
            dialogTitle: "",
            dialog: false,
            isDeleteDialog: false,
            headerList: [{
                    text: "ID",
                    align: "start",
                    value: "id",
                },
                {
                    text: "Name",
                    value: "name",
                },
                {
                    text: "Phone Number",
                    value: "phone_no1",
                },
                {
                    text: "University",
                    value: "bachelorUni",
                },
                {
                    text: "Job Experience",
                    value: "jobExperience",
                },
                {
                    text: "Operation",
                    value: "operation",
                },
            ],
            postList: [],
            showList: [],
        };
    },
    computed: {
        ...mapGetters(["isLoggedIn"]),
        headers() {
            if (!this.isLoggedIn) {
                return this.headerList.slice(0, this.headerList.length - 1);
            } else {
                return this.headerList;
            }
        },
    },
    mounted() {

        this.$axios
            .get("/api/applicants")
            .then((response) => {
                this.postList = response.data;
                this.showList = this.postList;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    methods: {
        /**
         * This is to filter posts of datatable.
         * @returns void
         */
        filterPosts() {
            this.showList = this.postList.filter((post) => {
                return (
                    post.id.includes(this.keyword) ||
                    post.name.includes(this.keyword) ||
                    post.phone_no1.includes(this.keyword) ||
                    post.balchelorUni.includes(this.keyword) ||
                    post.jobExperience.includes(this.keyword)
                );
            });
        },
        DeleteUser(id) {
            if (confirm("Do you really want to delete?")) {
                axios.delete('/api/applicants/delete?id=' + id)
                    .then(resp => {
                        if (resp) {
                            this.$axios
                                .get("/api/applicants")
                                .then((response) => {
                                    this.postList = response.data;
                                    this.showList = this.postList;
                                })
                                .catch((err) => {
                                    console.log(err);
                                });
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        },
    },
};