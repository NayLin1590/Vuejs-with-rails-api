<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form @submit.prevent="submitApplicantForm">
      <v-card class="mx-auto mb-3" max-width="900">
        <!-- Personal Information -->
        <div class="personalInformation">
          <v-card-title class="cyan white--text">
            <v-icon class="ml-4 mr-2" color="white"> mdi-account</v-icon
            >Personal Information
          </v-card-title>
          <div class="px-10">
            <validation-provider
              v-slot="{ errors }"
              name="Name"
              :rules="{
                required: true,
                max: textlength.FIFTY,
              }"
            >
              <v-text-field
                v-model="user.name"
                :counter="textlength.FIFTY"
                :error-messages="errors"
                label="Name"
                required
              >
              </v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="profilePhoto"
              rules="image|size:5120"
            >
              <v-file-input
                v-model="user.profilePhoto"
                :error-messages="errors"
                chips
                truncate-length="20"
                prepend-icon="mdi-camera"
                accept="image/*"
                label="Profile Photo"
                @change="addFile"
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
                  @change="inputDate"
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
              :rules="{
                required:true,
                max:textlength.TWOFIVEFIVE
                }"
            >
              <v-textarea
                no-resize
                v-model="user.currentAddress"
                rows="3"
                label="Current Address"
                :error-messages="errors"
                required
                :counter="textlength.TWOFIVEFIVE"
              ></v-textarea>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="hometownAddress"
              :rules="{
                max:textlength.TWOFIVEFIVE
                }"
            >
              <v-textarea
                no-resize
                v-model="user.hometownAddress"
                rows="3"
                label="Hometown Address"
                :error-messages="errors"
                :counter="textlength.TWOFIVEFIVE"
              >
              </v-textarea>
            </validation-provider>
          </div>
        </div>

        <!-- Education Background -->
        <div class="educationBackground pt-5">
          <v-card-title class="cyan white--text">
            <v-icon class="ml-4 mr-2" color="white"> mdi-school</v-icon
            >Education Background
          </v-card-title>
          <div class="px-10">
            <v-row>
              <v-col cols="4">
                <validation-provider
                  v-slot="{ errors }"
                  name="bachelorUni"
                  :rules="{
                    required: true,
                    max: textlength.FIFTY,
                  }"
                >
                  <v-text-field
                    v-model="user.bachelorUni"
                    :counter="textlength.FIFTY"
                    :error-messages="errors"
                    label="Bachelor University"
                  ></v-text-field>
                </validation-provider>
              </v-col>
              <v-col cols="4">
                <validation-provider
                  v-slot="{ errors }"
                  name="BachelorYear"
                  :rules="{
                    max: textlength.FIFTY,
                  }"
                >
                  <v-text-field
                    v-model="user.bachelorYear"
                    :counter="textlength.FIFTY"
                    :error-messages="errors"
                    label="Bachelor Year"
                  ></v-text-field>
                </validation-provider>
              </v-col>
              <v-col cols="4">
                <validation-provider
                  v-slot="{ errors }"
                  name="BachelorDegree"
                  :rules="{
                    max: textlength.FIFTY,
                  }"
                >
                  <v-text-field
                    v-model="user.bachelorDegree"
                    :counter="textlength.FIFTY"
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
                  :rules="{
                    max: textlength.FIFTY,
                  }"
                >
                  <v-text-field
                    v-model="user.masterUni"
                    :counter="textlength.FIFTY"
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
                  :rules="{
                    max: textlength.FIFTY,
                  }"
                >
                  <v-text-field
                    v-model="user.masterYear"
                    :counter="textlength.FIFTY"
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
                  :rules="{
                    max: textlength.FIFTY,
                  }"
                >
                  <v-text-field
                    v-model="user.masterDegree"
                    :counter="textlength.FIFTY"
                    :error-messages="errors"
                    label="Master Degree"
                  ></v-text-field>
                </validation-provider>
              </v-col>
            </v-row>

            <validation-provider
              v-slot="{ errors }"
              name="diplomaName"
              :rules="{
                max:textlength.TWOFIVEFIVE
                }"
            >
              <v-text-field
                v-model="user.diplomaName"
                :counter="textlength.TWOFIVEFIVE"
                :error-messages="errors"
                label="Diploma Name"
              >
              </v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="certificate"
              :rules="{
                max:textlength.TWOFIVEFIVE
                }"
            >
              <v-text-field
                v-model="user.certificate"
                :counter="textlength.TWOFIVEFIVE"
                :error-messages="errors"
                label="Certificates"
              >
              </v-text-field>
            </validation-provider>

            <v-row>
              <v-col cols="6">
                <validation-provider
                  v-slot="{ errors }"
                  name="programmingLang"
                  :rules="{
                    max: textlength.FIFTY,
                  }"
                >
                  <v-text-field
                    v-model="user.programmingLang"
                    placeholder="Ruby"
                    :counter="textlength.FIFTY"
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
                  :rules="{
                    max: textlength.FIFTY,
                  }"
                >
                  <v-text-field
                    v-model="user.programmingLevel"
                    placeholder="B"
                    :counter="textlength.FIFTY"
                    :error-messages="errors"
                    label="Programming  Level"
                  ></v-text-field>
                </validation-provider>
              </v-col>
            </v-row>

            <validation-provider
              v-slot="{ errors }"
              name="english"
              :rules="{
                max:textlength.TWOFIVEFIVE
                }"
            >
              <v-text-field
                v-model="user.english"
                :counter="textlength.TWOFIVEFIVE"
                :error-messages="errors"
                label="English Language Level"
              >
              </v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="japanese"
              :rules="{
              max:textlength.TWOFIVEFIVE
              }"
            >
              <v-text-field
                v-model="user.japanese"
                :counter="textlength.TWOFIVEFIVE"
                :error-messages="errors"
                label="Japanese Language Level"
              >
              </v-text-field>
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="otherLang"
              :rules="{
              max:textlength.TWOFIVEFIVE
              }"
            >
              <v-text-field
                v-model="user.otherLang"
                :counter="textlength.TWOFIVEFIVE"
                :error-messages="errors"
                label="Other Language Level"
              >
              </v-text-field>
            </validation-provider>
          </div>
        </div>

        <!-- Experience -->
        <div class="educationBackground pt-5">
          <v-card-title class="cyan white--text">
            <v-icon class="ml-4 mr-2" color="white"> mdi-briefcase</v-icon
            >Experience
          </v-card-title>
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

        <div class="errorMsg" :v-if="validationError">
          <div v-for="(err, index) in validationError" :key="index">
            <p>- {{ index + " : " + err[0] }}</p>
          </div>
        </div>
        <div class="text-center mt-5 pb-10">
          <v-btn @click="resetApplicantForm" class="mr-4">
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

<script src="../../services/pages/applicant/applicant-form.js"></script>

<style scoped src="../../assets/css/pages/applicant/applicant-form.css"></style>
