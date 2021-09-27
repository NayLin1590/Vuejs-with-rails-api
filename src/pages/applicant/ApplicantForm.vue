<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form @submit.prevent="submit">
      <v-card class="mx-auto mb-3" max-width="960">
        <!-- Personal Information -->
        <div class="personalInformation">
          <v-alert
            class="white--text"
            color="cyan"
            dark
            border="left"
            elevation="4"
            icon="mdi-account"
          >
            <h3>Personal Information</h3>
          </v-alert>
          <div class="px-10">
            <validation-provider
              v-slot="{ errors }"
              name="Name"
              rules="required|max:50"
            >
              <v-text-field
                v-model="user.name"
                :counter="50"
                :error-messages="errors"
                label="Name"
                required
              >
              </v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="profilePhoto"
              rules="image"
            >
              <v-file-input
                v-model="user.profilePhoto"
                :error-messages="errors"
                chips
                truncate-length="20"
                prepend-icon=""
                accept="image/png, image/jpeg, image/bmp"
                label="Profile Photo"
                @change="onAddFiles"
              >
              </v-file-input>
            </validation-provider>
            <div>
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <validation-provider
                    v-slot="{ errors }"
                    name="date"
                    rules="required"
                  >
                    <v-text-field
                      v-model="user.dob"
                      :error-messages="errors"
                      label="Birthday date"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </validation-provider>
                </template>
                <v-date-picker
                  v-model="user.dob"
                  :max="
                    new Date(
                      Date.now() - new Date().getTimezoneOffset() * 60000
                    )
                      .toISOString()
                      .substr(0, 10)
                  "
                  min="1990-01-01"
                  @change="save"
                ></v-date-picker>
              </v-menu>
            </div>

            <validation-provider
              v-slot="{ errors }"
              name="phone_no1"
              :rules="{
                required: true,
                digits: 11,
                regex: '^(09)\\d{9}$',
              }"
            >
              <v-text-field
                v-model="user.phone_no1"
                :counter="11"
                :error-messages="errors"
                label="Phone Number"
                required
              >
              </v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="email"
              rules="required|email"
            >
              <v-text-field
                v-model="user.email"
                :error-messages="errors"
                label="E-mail"
                required
              >
              </v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="currentAddress"
              rules="required"
            >
              <v-textarea
                no-resize
                v-model="user.currentAddress"
                rows="3"
                label="Current Address"
                :error-messages="errors"
                required
              ></v-textarea>
            </validation-provider>

            <v-textarea
              no-resize
              v-model="user.hometownAddress"
              rows="3"
              label="Hometown Address"
            >
            </v-textarea>
          </div>
        </div>

        <!-- Education Background -->
        <div class="educationBackground pt-5">
          <v-alert
            class="white--text"
            color="cyan"
            dark
            border="left"
            elevation="4"
            icon="mdi-school"
          >
            <h3>Education Background</h3>
          </v-alert>

          <div class="px-10">
            <v-row>
              <v-col cols="4">
                <validation-provider
                  v-slot="{ errors }"
                  name="bachelorUni"
                  rules="required|max:50"
                >
                  <v-text-field
                    v-model="user.bachelorUni"
                    :counter="50"
                    :error-messages="errors"
                    label="Bachelor University"
                  ></v-text-field>
                </validation-provider>
              </v-col>
              <v-col cols="4">
                <validation-provider
                  v-slot="{ errors }"
                  name="BachelorYear"
                  rules="max:50"
                >
                  <v-text-field
                    v-model="user.bachelorYear"
                    :counter="50"
                    :error-messages="errors"
                    label="Bachelor Year"
                  ></v-text-field>
                </validation-provider>
              </v-col>
              <v-col cols="4">
                <validation-provider
                  v-slot="{ errors }"
                  name="BachelorDegree"
                  rules="max:50"
                >
                  <v-text-field
                    v-model="user.bachelorDegree"
                    :counter="50"
                    :error-messages="errors"
                    label="Bachelor Degree"
                  ></v-text-field>
                </validation-provider>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <validation-provider
                  v-slot="{ errors }"
                  name="BachelorUni"
                  rules="max:50"
                >
                  <v-text-field
                    v-model="user.masterUni"
                    :counter="50"
                    :error-messages="errors"
                    label="Master University"
                  >
                  </v-text-field>
                </validation-provider>
              </v-col>
              <v-col cols="4">
                <validation-provider
                  v-slot="{ errors }"
                  name="BachelorYear"
                  rules="max:50"
                >
                  <v-text-field
                    v-model="user.masterYear"
                    :counter="50"
                    :error-messages="errors"
                    label="Master Year"
                  >
                  </v-text-field>
                </validation-provider>
              </v-col>
              <v-col cols="4">
                <validation-provider
                  v-slot="{ errors }"
                  name="BachelorDegree"
                  rules="max:50"
                >
                  <v-text-field
                    v-model="user.masterDegree"
                    :counter="50"
                    :error-messages="errors"
                    label="Master Degree"
                  ></v-text-field>
                </validation-provider>
              </v-col>
            </v-row>

            <validation-provider
              v-slot="{ errors }"
              name="diplomaName"
              rules="max:250"
            >
              <v-text-field
                v-model="user.diplomaName"
                :counter="250"
                :error-messages="errors"
                label="Diploma Name"
              >
              </v-text-field>
            </validation-provider>

            <validation-provider name="certificate">
              <v-text-field v-model="user.certificate" label="Certificates">
              </v-text-field>
            </validation-provider>

            <v-row>
              <v-col cols="6">
                <validation-provider
                  v-slot="{ errors }"
                  name="programmingLang"
                  rules="max:50"
                >
                  <v-text-field
                    v-model="user.programmingLang"
                    placeholder="Ruby"
                    :counter="50"
                    :error-messages="errors"
                    label="Programming Language"
                  >
                  </v-text-field>
                </validation-provider>
              </v-col>
              <v-col cols="6">
                <validation-provider
                  v-slot="{ errors }"
                  name="programmingLevel"
                  rules="max:50"
                >
                  <v-text-field
                    v-model="user.programmingLevel"
                    placeholder="B"
                    :counter="50"
                    :error-messages="errors"
                    label="Programming  Level"
                  ></v-text-field>
                </validation-provider>
              </v-col>
            </v-row>

            <validation-provider
              v-slot="{ errors }"
              name="english"
              rules="max:250"
            >
              <v-text-field
                v-model="user.english"
                :counter="250"
                :error-messages="errors"
                label="English Language Level"
              >
              </v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="japanese"
              rules="max:250"
            >
              <v-text-field
                v-model="user.japanese"
                :counter="250"
                :error-messages="errors"
                label="Japanese Language Level"
              >
              </v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="otherLang"
              rules="max:250"
            >
              <v-text-field
                v-model="user.otherLang"
                :counter="250"
                :error-messages="errors"
                label="Other Language Level"
              >
              </v-text-field>
            </validation-provider>
          </div>
        </div>

        <!-- Experience -->
        <div class="educationBackground pt-5">
          <v-alert
            class="white--text"
            color="cyan"
            dark
            border="left"
            elevation="4"
            icon="mdi-briefcase"
          >
            <h3>Experience</h3>
          </v-alert>
          <div class="px-10">
            <v-checkbox
              v-model="user.hasJobExp"
              label="Has Job Experience"
              color="info"
              hide-details
            >
            </v-checkbox>
            <div>
              <v-textarea
                no-resize
                v-model="user.internshipInfo"
                rows="3"
                label="Internship Information"
              >
              </v-textarea>
              <v-textarea
                no-resize
                v-model="user.jobExperience"
                rows="3"
                label="Job Experience"
              >
              </v-textarea>
              <validation-provider
                v-slot="{ errors }"
                name="totalExperience"
                rules="numeric|max:2"
              >
                <v-text-field
                  v-model="user.totalExperience"
                  :counter="2"
                  :error-messages="errors"
                  label="Total Expeience Years"
                >
                </v-text-field>
              </validation-provider>
            </div>
          </div>
        </div>

        <div class="errorMsg" :v-if="validateError">
          <div v-for="(err, index) in validateError" :key="index">
            <p>- {{ index + " : " + err[0] }}</p>
          </div>
        </div>
        <div class="text-center mt-5 pb-10">
          <v-btn @click="clear" class="mr-4">
            Reset
          </v-btn>
          <v-btn type="submit" :disabled="invalid">
            submit
          </v-btn>
        </div>
      </v-card>
    </form>
  </validation-observer>
</template>

<script src="../../services/pages/applicant/applicant-form.js">
</script>

<style scoped src="../../assets/css/pages/applicant/applicant-form.css">
</style>
