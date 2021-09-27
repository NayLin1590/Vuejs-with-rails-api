import axios from "axios";
export default {
    name: "post-detail",
    data() {
        return {
            dob: "",
            applicant: {},
        };
    },
    created() {
        axios.get(`/api/applicants/detail?id=${this.$route.params.id}`)
            .then((applicantData) => {
                this.dob = applicantData.data.dob;
                this.applicant = applicantData.data.applicant;
            })
            .catch();
    },
};