import axios from "axios";
export default {
    name: "post-detail",
    data() {
        return {
            dob: "",
            applicant: {},
        };
    },
    beforeCreate() {
        axios.get(`/api/applicants/detail?id=${this.$route.params.id}`)
            .then((applicantData) => {
                this.dob = applicantData.data.dob;
                this.applicant = applicantData.data.applicant;
            })
            .catch(err => {
                if (err) {
                    this.applicant = null
                }
            });
    },
};