<template>
<v-card>
    <v-card-title>
        Applicant list
        <v-spacer></v-spacer>
        <v-form ref="form">
            <v-row class="filter-bar">
                <v-col md="2.5" class="mr-5">
                    <v-text-field label="Search keyword" hide-details="auto"></v-text-field>
                </v-col>
                <!-- <v-btn class="post-list-btn mr-4" color="primary">Filter</v-btn>
                <v-btn class="post-list-btn mr-4" color="primary">Create</v-btn>
                <v-btn class="post-list-btn mr-4" color="primary">Upload</v-btn>
                <v-btn class="post-list-btn mr-4" color="primary">Download</v-btn> -->
            </v-row>
        </v-form>
    </v-card-title>
    <v-container>
        <v-data-table :headers="headers" :items="showList">
            <template v-slot:[`item.name`]="{ item }">
                <!-- <router-link :to="`/post/list/detail/${item.id}`" class="btn btn-primary btn-block">{{item.name}}</router-link> -->
                <router-link :to="`/post/list/detail/${item.id}`" :key="item.id" v-if="item.name">{{item.name}}</router-link>
            </template>
            <!-- <template v-slot:[`item.operation,item.id`]>         -->
            <template v-slot:[`item.operation`]="{ item }">
                <v-row>
                    <div class="operation-btn">
                        <router-link :to="`/post/list/detail/${item.id}`" class="post-detail-btn">DETAIL</router-link>
                         <!-- <v-btn color="primary" class="post-list-btn">Detail</v-btn>                        -->
                    </div>
                    <div class="operation-btn">
                        
                        <v-btn color="error" v-on:click="DeleteUser(`${item.id}`)" class="post-list-btn">Delete</v-btn>
                    </div>
                </v-row>
            </template>
        </v-data-table>
    </v-container>
</v-card>
</template>

<script src="../../services/post/post-list.js">
</script>

<style scoped src="../../assets/css/pages/post/post-list.css">
</style>
