import {
    mapGetters
} from "vuex";
import axios from "axios";
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
            searchValue: null,
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
        this.SelectAll();
    },
    methods: {
        /**
         * This is to filter posts of datatable.
         * {string} searchValue The Keywork to search
         * @returns void
         */
        filterPosts() {
            if (this.searchValue) {
                this.showList = this.postList.filter((post) => {
                    return (
                        post.name.toLowerCase().includes(this.searchValue.toLowerCase()) ||
                        post.bachelorUni
                        .toLowerCase()
                        .includes(this.searchValue.toLowerCase())
                    );
                });
            } else {
                this.showList = this.postList;
            }
        },
        /**
         * DeleteUser
         * This is to delete the applicant
         * @param {id} id The applicant id to delete
         * @returns void
         */
        DeleteUser(id) {
            if (confirm("Do you really want to delete?")) {
                axios
                    .delete("/api/applicants/delete?id=" + id)
                    .then((resp) => {
                        if (resp) {
                            this.SelectAll();
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        /**
         * SelectAll()
         * This is to read all applicants from database.
         * @returns void
         */
        SelectAll() {
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
    },
};