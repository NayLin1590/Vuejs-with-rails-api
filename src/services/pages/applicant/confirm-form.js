export default {
    name: "Confirm",
    data() {
        return {
            name: "",
        };
    },
    methods: {
        /**
         * This is submit to save the Applicant Data
         * @returns void
         */
        confirmApplicantForm() {
            let formData = new FormData();
            if (this.applicantInfo.profilePhoto !== null) {
                formData.append("imgfile", this.applicantInfo.profilePhoto);
                Object.entries(this.applicantInfo).forEach(([key, value]) => {
                    formData.append(key, value);
                });
            }
            formData.append(
                "programming",
                this.applicantInfo.programmingLang +
                " : " +
                this.applicantInfo.programmingLevel
            );
            formData.append("profilePhoto", this.applicantInfo.profilePhoto.name);
            this.$store.dispatch("createApplicant", formData);
        },

        /**
         * This is cancel 'form submittion'
         * @returns void
         */
        cancelApplicantForm() {
            this.$store.dispatch("cancelApplicant");
            this.$router.push({
                name: "applicantform"
            });
        },
    },
    computed: {
        applicantInfo() {
            return this.$store.state.applicantsData;
        },
        imgFile() {
            return this.$store.state.imgFile;
        },
    },
};