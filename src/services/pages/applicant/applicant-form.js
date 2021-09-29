import {
    required,
    digits,
    email,
    max,
    regex,
    numeric,
    image,
    size
} from "vee-validate/dist/rules";
import {
    extend,
    ValidationObserver,
    ValidationProvider,
    setInteractionMode,
} from "vee-validate";
import constants from "../../../constants";
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
extend("size", {
    ...size,
    message: `file size is grater than {size} kb`,
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
        textlength: constants.TEXT_LENGTH,
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
            hasJobExp: false,
        },
        validateError: null,
        menu: false,
    }),

    methods: {
        /**
         * This is to add img file to the imgFile[] state of store.
         * @param {file} file The selected file from file-field
         * @returns void
         */
        addFile(file) {
            if (file) {
                if (file.size <= 5120 * 1024) { //file size is <= 10Mb
                    const reader = new FileReader();
                    reader.addEventListener("load", (e) =>
                        this.$store.dispatch("createImgFile", e.target.result)
                    );
                    reader.addEventListener("error", () =>
                        this.$store.dispatch("createImgFile", "error")
                    );
                    reader.readAsDataURL(file);
                } else {
                    this.$store.dispatch("createImgFile", null);
                }
            } else {
                this.$store.dispatch("createImgFile", null);
            }
        },
        /**
         * This is to check the form for validate and push to confirm route
         * @returns void
         */
        submitApplicantForm() {
            this.$refs.observer.validate();
            this.$store.dispatch("validateApplicant", this.user)
        },
        /**
         * This is to clear all data in input field 
         * @returns void
         */
        resetApplicantForm() {
            var self = this;
            Object.keys(this.user).forEach(function (key) {
                self.user[key] = "";
            });
            this.validateError = null;
            this.user.profilePhoto = null;
            this.$refs.observer.reset();
        },
        /**
         * This is date field function of UI.
         * @param { date } date the date for dob field
         * @reutrns null
         */
        inputDate(date) {
            this.$refs.menu.save(date);
        },
    },
    created() {
        this.$store.state.userValidationErrors = null;
    },
    computed: {
        validationError() {
            return this.$store.state.userValidationErrors
        }
    }
};