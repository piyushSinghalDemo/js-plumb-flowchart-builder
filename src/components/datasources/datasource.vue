<template>
    <v-container class="background" grid-list-lg>
        <!-- <h1>DataSource Screen</h1> -->
        <!-- <Breadcrumb></Breadcrumb> -->
        <v-layout row justify-center>
            <v-card style="width:100%">
                <v-card-title>
                    <span class="headline">Data Source</span>
                </v-card-title>
                <v-card-text style="padding-top:0px">
                     <v-container class="form-background" style="padding-top:0px" grid-list-lg>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 >
                            <!-- <v-text-field label="Select Database Type"></v-text-field> -->
                            <v-select :items="['MS-SQL', 'ORACLE', 'DB2 i-series', 'BD2 LUW']" clearable label="Select Database Type"></v-select>
                        </v-flex>
                        <v-flex xs12 sm6 >
                            <v-text-field label="Datasource Name"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 >
                            <!-- <v-text-field label="Select Datasource Property"></v-text-field> -->
                            <v-select :items="['MS-SQL', 'ORACLE', 'DB2 i-series', 'BD2 LUW']" label="Select Datasource Property"></v-select>
                        </v-flex>
                        <v-flex xs12 sm6 >
                            <v-text-field label="Host"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 >
                            <v-text-field label="Port"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 >
                            <v-text-field label="User Name"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 >
                            <v-text-field style="display:inline-block;width:93%" label="Password"></v-text-field>
                            <v-icon style="cursor:pointer" v-b-popover.hover.right="'Minimum 8 character required. Atleast one capital latter,small latter,digit and special character required '" title="Password Policy"
                                            variant="primary">visibility</v-icon>
                        </v-flex>
                        <v-flex xs12 sm6 >
                            <v-text-field label="Database"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 >
                            <v-text-field label="Schema Name"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 >
                            <v-text-field label="Description"></v-text-field>
                             <!-- <v-textarea label="Description"></v-textarea> -->
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 >
                            <v-text-field label="Timeout"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 >
                            <!-- <v-text-field label="Legal middle name"></v-text-field> -->
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-btn color="info">
                                <router-link to="/createdatasource"> Save </router-link>
                            </v-btn>
                            <v-btn color="info">
                                <router-link to="/createdatasource"> Test Connection </router-link>
                            </v-btn>
                            <v-btn color="info">
                                <router-link to="/createdatasource"> Cancel </router-link>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                     </v-container>
                </v-card-text>
            </v-card>
        </v-layout>
    </v-container>
</template>
<script>
import Breadcrumb from "../Breadcrumbs.vue"
export default {
    name:"newDatasource",
      components: {
         Breadcrumb
      }
}
</script>
<style>
.background{
    background: #f4f6f9; 
}
.form-background{
    background-color: white;
}
</style>
