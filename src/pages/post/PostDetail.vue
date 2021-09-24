<template>
  <!-- <div>
    <h2>{{applicant.name}}</h2>
    <v-img width="200"   :src="applicant.profilePhoto"></v-img>
  </div> -->
  <v-container>
    <v-card class="mx-auto" max-width="960">
      <v-row>
        <v-col cols="8">
          <v-img width="200" height="200" class="custom-img grey darken-4 ml-10" :src="applicant.profilePhoto"></v-img>
          <v-card width="97%" class="mt-5">
            <h3 class="pr-5 mb-5 h3-custom text-right">EDUCATION </h3>
            <v-list class="ml-3">
              <v-list-item>
                <v-avatar color="primary" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-school
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> Balchelor Degree Info</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content>{{applicant.bachelorUni}}</v-list-item-content>
                  <v-list-item-subtitle>{{applicant.bachelorYear}} <strong>{{applicant.bachelorDegree}}</strong>
                  </v-list-item-subtitle>

                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-avatar color="primary" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-school
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> Master Degree Info</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content>{{applicant.masterUni}}</v-list-item-content>
                  <v-list-item-subtitle>{{applicant.masterYear}} <strong>{{applicant.masterDegree}}</strong>
                  </v-list-item-subtitle>

                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-avatar color="primary" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-school
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> Diploma Info</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content> {{applicant.diplomaName}} </v-list-item-content>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-avatar color="primary" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-school
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> Certificate Info</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content> {{applicant.certificate}}</v-list-item-content>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
          <v-card width="97%" class="mt-5">
            <h3 class="pr-5 mb-5 h3-custom text-right"> EXPERIENCE</h3>
            <v-list class="ml-3">
              <v-list-item>
                <v-avatar color="primary" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-briefcase
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> Internship Info</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content>{{applicant.internshipInfo}}</v-list-item-content>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-avatar color="primary" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-briefcase
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> Job Experience Info</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content>{{applicant.jobExperience}}</v-list-item-content>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-avatar color="primary" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-briefcase
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> Total Experience years</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content> {{applicant.totalExperience}} years </v-list-item-content>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="4" class="r-side px-10">
          <v-card class="mb-8 py-10 text-center" dark color="rgb(0, 140, 255)">
            <h2>{{applicant.name}}</h2>
            <p class="text">Junior Developer</p>
          </v-card>
          <v-card class="mb-5" dark color="rgb(128, 128, 128)">
            <v-card dark color="rgb(128, 128, 128)">
              <p class="p-custom text-center">CONTACT ME</p>
            </v-card>
            <v-list dark color="rgb(128, 128, 128)">
              <v-list-item>
                <v-icon dark color="rgb(0, 140, 255)" class="mr-5">
                  mdi-map-marker
                </v-icon>
                <v-list-item-content>
                   {{applicant.currentAddress}}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-icon dark color="rgb(0, 140, 255)" class="mr-5">
                  mdi-home-heart
                </v-icon>
                <v-list-item-content>
                   {{applicant.hometownAddress}}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-icon dark color="rgb(0, 140, 255)" class="mr-5">
                  mdi-email
                </v-icon>
                <v-list-item-content>
                  {{applicant.email}}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-icon dark color="rgb(0, 140, 255)" class="mr-5">
                  mdi-phone
                </v-icon>
                <v-list-item-content>
                  {{applicant.phone_no1}}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-icon dark color="rgb(0, 140, 255)" class="mr-5">
                  mdi-cake-variant
                </v-icon>
                <v-list-item-content>
                 {{ dob}} 
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>

          <!-- skill   -->
          <v-card class="mb-10" color="rgb(128, 128, 128)">
            <v-card dark color="rgb(128, 128, 128)">
              <p class="p-custom text-center">PRO SKII</p>
            </v-card>
            <v-list dark color="rgb(128, 128, 128)">
              <v-list-item-subtitle>Programming Skill</v-list-item-subtitle>

              <v-list-item>
                <v-icon dark color="rgb(0, 140, 255)" class="mr-5">
                  mdi-crown
                </v-icon>
                <v-list-item-content>
                   {{applicant.programming}}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-icon dark color="rgb(0, 140, 255)" class="mr-5">
                  mdi-language-html5
                </v-icon>
                <v-list-item-content>
                  Html/Css : C
                </v-list-item-content>
              </v-list-item>

              <v-list-item-subtitle>Language Skill</v-list-item-subtitle>
              <v-list-item>
                <v-icon dark color="rgb(0, 140, 255)" class="mr-5">
                  mdi-head-plus
                </v-icon>
                <v-list-item-content>
                  Japanese : {{applicant.japanese}}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-icon dark color="rgb(0, 140, 255)" class="mr-5">
                  mdi-head-plus
                </v-icon>
                <v-list-item-content>
                   English : {{applicant.english}}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-icon dark color="rgb(0, 140, 255)" class="mr-5">
                  mdi-head-plus
                </v-icon>
                <v-list-item-content>
                  Other Language : {{applicant.otherLang}}
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>

          <v-card class="text-center py-1" color="rgb(128, 128, 128)">
            <v-avatar color="primary" class="mr-2" size="28" tile>
              <v-icon dark>
                mdi-facebook
              </v-icon>
            </v-avatar>
            <v-avatar class="mr-2" color="primary" size="28" tile>
              <v-icon dark>
                mdi-twitter
              </v-icon>
            </v-avatar>
            <v-avatar color="rgb(255, 146, 3)" size="28" tile>
              <v-icon dark>
                mdi-instagram
              </v-icon>
            </v-avatar>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "post-detail",
    data() {
      return {
        dob: "",
        applicant: {}
      }
    },
    created() {
      axios.get(`/api/applicants/detail?id=${this.$route.params.id}`)
        .then(applicantData => {
          this.dob = applicantData.data.dob

          // this.dob = moment("2013-06-13T16:29:55.245Z").format("M/DD/YYYY")
          this.applicant = applicantData.data.applicant
        })
        .catch()
    }
  }
</script>

<style>
  .r-side {
    background-color: rgb(109, 109, 109);
    position: relative;
  }

  .custom-img {
    border-radius: 50%;
    border: 3px solid rgb(0, 140, 255);
  }

  .h3-custom {
    padding: 3px;
    letter-spacing: 5px;
    background-color: rgb(0, 140, 255);
  }

  .p-custom {
    color: white;
    padding: 3px 0;
    border: 2px solid rgb(0, 140, 255);
    border-radius: 5px;
    letter-spacing: 1.5px;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: none;
  }
</style>