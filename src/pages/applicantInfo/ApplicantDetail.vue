<template>
  <!-- <div>
    <h2>{{applicant.name}}</h2>
    <v-img width="200"   :src="applicant.profilePhoto"></v-img>
  </div> -->
  <v-container>
    <v-card class="mx-auto pl-6" max-width="960">
      <v-row>
        <v-col cols="8">
          <v-img
            width="200"
            height="200"
            class="custom-img grey darken-4 ml-10"
            :src="applicant.profilePhoto"
          ></v-img>
          <v-card width="97%" class="mt-5">
            <h3 class="pr-5 py-2 mb-1 cyan text-right h3-custom">EDUCATION</h3>
            <v-list class="ml-3">
              <v-list-item>
                <v-avatar color="cyan" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-school
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> Balchelor Degree Info</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content>{{
                    applicant.bachelorUni
                  }}</v-list-item-content>
                  <v-list-item-subtitle class=""
                    ><strong class="mr-2"
                      >{{ applicant.bachelorDegree }} /
                    </strong>
                    {{ applicant.bachelorYear }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-avatar color="cyan" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-school
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> Master Degree Info</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content>{{
                    applicant.masterUni
                  }}</v-list-item-content>
                  <v-list-item-subtitle>
                    <strong class="mr-2"
                      >{{ applicant.masterDegree }} /
                    </strong>
                    {{ applicant.masterYear }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-avatar color="cyan" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-school
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> Diploma Info</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content>
                    {{ applicant.diplomaName }}
                  </v-list-item-content>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-avatar color="cyan" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-school
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> Certificate Info</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content>
                    {{ applicant.certificate }}</v-list-item-content
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
          <v-card width="97%" class="mt-5">
            <h3 class="pr-5 py-2 mb-1 cyan h3-custom text-right">EXPERIENCE</h3>
            <v-list class="ml-3">
              <v-list-item>
                <v-avatar color="cyan" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-briefcase
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> Internship Info</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content>{{
                    applicant.internshipInfo
                  }}</v-list-item-content>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-avatar color="cyan" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-briefcase
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> Job Experience Info</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content>{{
                    applicant.jobExperience
                  }}</v-list-item-content>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-avatar color="cyan" class="mr-3" size="30" tile>
                  <v-icon dark>
                    mdi-briefcase
                  </v-icon>
                </v-avatar>
                <v-list-item-content>
                  <v-list-item-title> Total Experience years</v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-content>
                    {{ applicant.totalExperience }} years
                  </v-list-item-content>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="4" class="cyan px-5">
          <v-card class="mb-8 py-10 text-center">
            <h2 color="cyan">{{ applicant.name }}</h2>
            <p class="text">Junior Developer</p>
          </v-card>
          <v-card class="mb-5">
            <v-card color="cyan">
              <p class="p-custom text-center">Personal Information</p>
            </v-card>
            <v-list>
              <v-list-item>
                <v-icon class="mr-5" color="cyan">
                  mdi-map-marker
                </v-icon>
                <v-list-item-content>
                  {{ applicant.currentAddress }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-icon class="mr-5" color="cyan">
                  mdi-home-heart
                </v-icon>
                <v-list-item-content>
                  {{ applicant.hometownAddress }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-icon class="mr-5" color="cyan">
                  mdi-email
                </v-icon>
                <v-list-item-content>
                  {{ applicant.email }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-icon class="mr-5" color="cyan">
                  mdi-phone
                </v-icon>
                <v-list-item-content>
                  {{ applicant.phone_no1 }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-icon class="mr-5" color="cyan">
                  mdi-cake-variant
                </v-icon>
                <v-list-item-content>
                  {{ dob }}
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>

          <!-- skill   -->
          <v-card class="mb-10">
            <v-card class="cyan">
              <p class="p-custom text-center">SKILL</p>
            </v-card>
            <v-list>
              <v-list-item-subtitle class="ml-6"
                >Programming Skill</v-list-item-subtitle
              >

              <v-list-item>
                <v-icon class="mr-5" color="cyan">
                  mdi-crown
                </v-icon>
                <v-list-item-content>
                  {{ applicant.programming }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-icon class="mr-5" color="cyan">
                  mdi-language-html5
                </v-icon>
                <v-list-item-content>
                  Html/Css : C
                </v-list-item-content>
              </v-list-item>

              <v-list-item-subtitle class="ml-6"
                >Language Skill</v-list-item-subtitle
              >
              <v-list-item>
                <v-icon class="mr-5" color="cyan">
                  mdi-head-plus
                </v-icon>
                <v-list-item-content>
                  Japanese : {{ applicant.japanese }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-icon class="mr-5" color="cyan">
                  mdi-head-plus
                </v-icon>
                <v-list-item-content>
                  English : {{ applicant.english }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-icon class="mr-5" color="cyan">
                  mdi-head-plus
                </v-icon>
                <v-list-item-content>
                  Other Language : {{ applicant.otherLang }}
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>

          <v-card class="text-center py-1">
            <v-avatar color="cyan" class="mr-2" size="28" tile>
              <v-icon dark>
                mdi-facebook
              </v-icon>
            </v-avatar>
            <v-avatar class="mr-2" color="cyan" size="28" tile>
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

<script src="../../services/applicant-info/applicant-detail.js"></script>
<style
  scoped
  src="../../assets/css/pages/applicant-info/applicant-detail.css"
></style>
