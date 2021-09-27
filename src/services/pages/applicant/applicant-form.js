import {
    required,
    digits,
    email,
    max,
    regex,
    numeric,
    image,
} from "vee-validate/dist/rules";
import {
    extend,
    ValidationObserver,
    ValidationProvider,
    setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");
extend("numeric", numeric);
extend("digits", {
    ...digits,
    message: "{_field_} needs to be {length} digits. ({_value_})",
});
extend("image", {
    ...image,
    message: "{_field_} please select img type",
});
extend("required", {
    ...required,
    message: "{_field_} can not be empty",
});

extend("max", {
    ...max,
    message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
    ...regex,
    message: "{_field_} {_value_} does not match 09*********",
});

extend("email", {
    ...email,
    message: "Email must be valid",
});

export default {
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    data: () => ({
        user: {
            name: "",
            profilePhoto: null,
            dob: "",
            phone_no1: "",
            email: "",
            currentAddress: "",
            hometownAddress: "",
            bachelorUni: "",
            bachelorYear: "",
            bachelorDegree: "",
            masterUni: "",
            masterYear: "",
            masterDegree: "",
            diplomaName: "",
            certificate: "",
            programmingLang: "",
            programmingLevel: "",
            english: "",
            japanese: "",
            otherLang: "",
            internshipInfo: "",
            jobExperience: "",
            totalExperience: "",
            hasJobExp: "",
        },
        validateError: null,
        menu: false,
    }),

    methods: {
        /**
         * onAddFiles
         * This is to add img file to the imgFile[] state of store.
         * @param {file} file The selected file from file-field
         * @returns void
         */
        onAddFiles(file) {
            if (file) {
                const reader = new FileReader();
                reader.addEventListener("load", (e) =>
                    this.$store.dispatch("imgFile", e.target.result)
                );
                reader.addEventListener("error", () =>
                    this.$store.dispatch("imgFile", "error")
                );
                reader.readAsDataURL(file);
            } else {
                this.$store.dispatch("imgFile", null);
            }
        },
        /**
         * This is date field function of UI.
         */
        save(date) {
            this.$refs.menu.save(date);
        },
        /**
         * submit
         * This is submit to check the form for validate 
         * @returns void
         */
        submit() {
            this.$refs.observer.validate();
            this.$store.dispatch("confirm", this.user).then(() => {
                this.validateError = this.$store.state.userValidationErrors;
            });
        },
        /**
         * clear
         * This is to clear all data in input field 
         * @returns void
         */
        clear() {
            var self = this;
            Object.keys(this.user).forEach(function (key) {
                self.user[key] = "";
            });
            this.validateError = null;
            this.user.profilePhoto = null;
            this.$refs.observer.reset();
        },
    },
    created() {
        this.$store.state.userValidationErrors = null;
    },
};