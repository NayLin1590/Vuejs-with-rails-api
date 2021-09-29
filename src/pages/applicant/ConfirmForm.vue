<template>
  <div>
    <form @submit.prevent="confirmApplicantForm">
      <v-card class="mx-auto mb-3" max-width="960">
        <div class="personalInfo mb-5">
          <v-card-title class="cyan white--text" icon="mdi-account">
            <v-icon class=" mr-2" color="white">mdi-account</v-icon>
            Personal Information
          </v-card-title>
          <div class="pl-8">
            <v-card-title size class=" text-md-body-1">
              <span class="width-label"> Name :</span
              ><strong>{{ applicantInfo.name }}</strong>
            </v-card-title>

            <v-card-title size class=" text-md-body-1">
              <v-row>
                <v-col cols="4">
                  <span class="pro">Profile Photo :</span>
                </v-col>
                <v-col cols="8">
                  <v-img
                    width="200"
                    v-if="imgFile && imgFile.length"
                    :src="imgFile"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card-title>

            <v-card-title size class=" text-md-body-1">
              <span class="width-label"> Date of Birth :</span
              ><strong>{{ applicantInfo.dob }}</strong>
            </v-card-title>

            <v-card-title size class=" text-md-body-1">
              <span class="width-label"> Phone Number :</span
              ><strong>{{ applicantInfo.phone_no1 }}</strong>
            </v-card-title>
            <v-card-title size class=" text-md-body-1">
              <span class="width-label"> Email :</span
              ><strong>{{ applicantInfo.email }}</strong>
            </v-card-title>
            <v-card-title size class=" text-md-body-1">
              <span class="width-label"> Current Address :</span
              ><strong>{{ applicantInfo.currentAddress }}</strong>
            </v-card-title>
            <v-card-title size class=" text-md-body-1">
              <span class="width-label"> Hometown Address :</span
              ><strong>{{ applicantInfo.hometownAddress }}</strong>
            </v-card-title>
          </div>
        </div>

        <div class="education mb-5">
          <v-card-title class="cyan white--text" icon="mdi-account">
            <v-icon class=" mr-2" color="white">mdi-school</v-icon>
            Education Background
          </v-card-title>
          <div class="pl-8">
            <v-card-title size class=" text-md-body-1">
              <span class="width-label"> Bachelor Info :</span
              ><span v-if="applicantInfo.bachelorDegree">{{
                applicantInfo.bachelorDegree }}
                  , </span>
                  <span v-if="applicantInfo.bachelorUni">
                 {{ applicantInfo.bachelorUni }}
                 </span>
                  <span v-if="applicantInfo.bachelorYear">
                  , {{ applicantInfo.bachelorYear }}
                  </span>
            </v-card-title>
            <v-card-title size class=" text-md-body-1">
              <span class="width-label"> Master Info :</span
              ><span v-if="applicantInfo.masterDegree">
                {{ applicantInfo.masterDegree }} ,
                </span>
                <span>
                 {{ applicantInfo.masterUni }}
                </span>
                <span v-if=" applicantInfo.masterYear">
                 , {{ applicantInfo.masterYear}}
                </span>
            </v-card-title>

            <v-card-title size class=" text-md-body-1">
              <span class="width-label"> Diploma Name :</span
              ><strong>{{ applicantInfo.diplomaName }}</strong>
            </v-card-title>
            <v-card-title size class=" text-md-body-1">
              <span class="width-label"> Certificate :</span
              ><strong>{{ applicantInfo.certificate }}</strong>
            </v-card-title>
            <v-card-title size class=" text-md-body-1">
              <span class="width-label"> Programming Skill :</span
              ><strong>{{
                applicantInfo.programmingLang +
                  " : " +
                  applicantInfo.programmingLevel
              }}</strong>
            </v-card-title>
            <v-card-title size class=" text-md-body-1">
              <span class="width-label"> English Language Skill :</span
              ><strong>{{ applicantInfo.english }}</strong>
            </v-card-title>
            <v-card-title size class=" text-md-body-1">
              <span class="width-label"> Japanese Language Skill :</span
              ><strong>{{ applicantInfo.japanese }}</strong>
            </v-card-title>
            <v-card-title size class=" text-md-body-1">
              <span class="width-label"> Other Language Skill :</span
              ><strong>{{ applicantInfo.otherLang }}</strong>
            </v-card-title>
          </div>
        </div>
        
        <div class="education mb-5">
          <v-card-title class="cyan white--text" icon="mdi-account">
            <v-icon class=" mr-2" color="white">mdi-briefcase</v-icon>
            Work Experience
          </v-card-title>
          <div class="pl-8">
            <v-card-title size class=" text-md-body-1">
              <span class="width-label">Has Job Experience? :</span
              ><strong>{{ applicantInfo.jobExperience }}</strong>
            </v-card-title>
            <v-card-title size class=" text-md-body-1">
              <span class="width-label"> Internship Info :</span
              ><strong>{{ applicantInfo.internshipInfo }}</strong>
            </v-card-title>
            <v-card-title size class=" text-md-body-1">
              <span class="width-label"> Job Experience :</span
              ><strong>{{ applicantInfo.jobExperience }}</strong>
            </v-card-title>
            <v-card-title size class=" text-md-body-1">
              <span class="width-label"> Total Experience :</span
              ><strong>{{ applicantInfo.totalExperience }} years</strong>
            </v-card-title>
            <div class="text-center mt-5 pb-10">
              <v-btn @click="cancelApplicantForm" class="mr-4">
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

<script src="../../services/pages/applicant/confirm-form.js"></script>
<style scoped src="../../assets/css/pages/applicant/confirm-form.css"></style>
