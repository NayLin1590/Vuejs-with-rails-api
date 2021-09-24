<template>
  <div>
    <form @submit.prevent="submit">
      <v-card class="mx-auto mb-3" max-width="960">
        <div class="personalInfo mb-5">
          <v-alert class="white--text" color="cyan" dark border="left" elevation="4" icon="mdi-account">
            <h3>Personal Information</h3>
          </v-alert>
          <div>
              <!-- <img width="25%"  v-if="imgFile && imgFile.length" :src="imgFile"/> -->
            <v-alert elevation="1" class="pl-10">
              <span class="width-label"> Name :</span><strong>{{applicantInfo.name}}</strong>
            </v-alert>

            <v-alert elevation="1" class="pl-10">
              <v-row>
                <v-col cols="4"> 
                  <span class="pro">Profile Photo :</span>
                </v-col>
                <v-col cols="8">
                  <v-img width="200"  v-if="imgFile && imgFile.length" :src="imgFile"></v-img>
                </v-col>
              </v-row>
            </v-alert>

            <v-alert elevation="1" class="pl-10">
              <span class="width-label"> Date of Birth :</span><strong>{{applicantInfo.dob}}</strong>

            </v-alert>

            <v-alert elevation="1" class="pl-10">
              <span class="width-label"> Phone Number :</span><strong>{{applicantInfo.phone_no1}}</strong>
            </v-alert>
            <v-alert elevation="1" class="pl-10">
              <span class="width-label"> Email :</span><strong>{{applicantInfo.email}}</strong>
            </v-alert>
            <v-alert elevation="1" class="pl-10">
              <span class="width-label"> Current Address :</span><strong>{{applicantInfo.currentAddress}}</strong>
            </v-alert>
            <v-alert elevation="1" class="pl-10">
              <span class="width-label"> Hometown Address :</span><strong>{{applicantInfo.hometownAddress}}</strong>
            </v-alert>
          </div>
        </div>

        <div class="education mb-5">
          <v-alert class="white--text" color="cyan" dark border="left" elevation="4" icon="mdi-school">
            <h3>Education Background</h3>
          </v-alert>
          <div>
            <v-alert elevation="1" class="pl-10">
              <span class="width-label"> Bachelor Info :</span><strong>{{applicantInfo.bachelorDegree +", "+applicantInfo.bachelorUni+", "+ applicantInfo.bachelorYear}}</strong>
            </v-alert>
            <v-alert elevation="1" class="pl-10">
              <span class="width-label"> Master Info :</span><strong>{{applicantInfo.masterDegree +", "+applicantInfo.masterUni+", "+ applicantInfo.masterYear}}</strong>
            </v-alert>
            
            <v-alert elevation="1" class="pl-10">
              <span class="width-label"> Diploma Name :</span><strong>{{applicantInfo.diplomaName}}</strong>
            </v-alert>
            <v-alert elevation="1" class="pl-10">
              <span class="width-label"> Certificate :</span><strong>{{applicantInfo.certificate}}</strong>
            </v-alert>
            <v-alert elevation="1" class="pl-10">
              <span class="width-label"> Programming Skill :</span><strong>{{applicantInfo.programmingLang +" : "+ applicantInfo.programmingLevel}}</strong>
            </v-alert>
            <v-alert elevation="1" class="pl-10">
              <span class="width-label"> English Language Skill :</span><strong>{{applicantInfo.english}}</strong>
            </v-alert>
            <v-alert elevation="1" class="pl-10">
              <span class="width-label"> Japanese Language Skill :</span><strong>{{applicantInfo.japanese}}</strong>
            </v-alert>
            <v-alert elevation="1" class="pl-10">
              <span class="width-label"> Other Language Skill :</span><strong>{{applicantInfo.otherLang}}</strong>
            </v-alert>
          </div>
        </div>

        <div class="education mb-5">
          <v-alert class="white--text" color="cyan" dark border="left" elevation="4" icon="mdi-briefcase">
            <h3>Work Experience</h3>
          </v-alert>
          <div>
            <v-alert elevation="1" class="pl-10">
              <span class="width-label">Has Job Experience? :</span><strong>{{applicantInfo.jobExperience}}</strong>
            </v-alert>
            <v-alert elevation="1" class="pl-10">
              <span class="width-label"> Internship Info :</span><strong>{{applicantInfo.internshipInfo}}</strong>
            </v-alert>
            <v-alert elevation="1" class="pl-10">
              <span class="width-label"> Job Experience :</span><strong>{{applicantInfo.jobExperience}}</strong>
            </v-alert>
            <v-alert elevation="1" class="pl-10">
              <span class="width-label"> Total Experience :</span><strong>{{applicantInfo.totalExperience}} years</strong>
            </v-alert>
            <div class="text-center mt-5 pb-10">
              <v-btn @click="cancel" class="mr-4">
                Cancel
              </v-btn>
              <v-btn type="submit">
                Confirm
              </v-btn>
            </div>
          </div>
        </div>
      </v-card>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Confirm",
    data (){
      return {
        name: "",
      }
    },
    methods: {
      submit(){
        // console.log(this.applicantInfo.profilePhoto)
        let formData = new FormData();
        if (this.applicantInfo.profilePhoto !== null) {
          formData.append("imgfile", this.applicantInfo.profilePhoto );
          // console.log(this.applicantInfo.profilePhoto.name)
         Object.entries(this.applicantInfo).forEach(([key, value]) => {
            formData.append(key, value);
          });
        }
        formData.append("programming", this.applicantInfo.programmingLang + " : " + this.applicantInfo.programmingLevel)
        formData.append("profilePhoto", this.applicantInfo.profilePhoto.name)
        this.$store.dispatch("createPost", formData);
      },
      cancel(){
        this.$store.dispatch("cancel");
        this.$router.push({ name: "applicantform" });
      }
    },
    computed: {
      applicantInfo(){
        //  console.log(this.$store.state.applicantsData.profilePhoto);
        return this.$store.state.applicantsData
      },
      imgFile(){
        return this.$store.state.imgFile
      }
    },
  }
</script>

<style>
  .width-label {
    float: left;
    display: block;
    width: 35%;
    color: rgba(5, 176, 255, 0.932);
    font-weight: bold;
  }
  .pro {
    color: rgba(5, 176, 255, 0.932);
    font-weight: bold;
  }
  strong {
    display: block;
    float: left;
    width: 65%;
  }
</style>