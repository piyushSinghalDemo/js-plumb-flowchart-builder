<template>
    <v-container grid-list-md>
        <Breadcrumb></Breadcrumb>
        <v-card>
            <v-card-title>
                <v-layout row wrap justify-start>
                    <v-flex xs2>
                     <h3>Data Sources</h3>   
                    </v-flex>
                    <v-flex xs3 offset-xs5>
                        <v-tooltip bottom>
                            <v-text-field slot="activator" v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
                            <span>Search data from list</span>
                        </v-tooltip>
                    </v-flex>
                    <v-flex xs2>
                        <v-tooltip bottom>
                        <v-btn slot="activator" @click="addDataSource" color="info" right>
                             Add 
                        </v-btn>
                        <span>Add New DataSource</span>
                        </v-tooltip>
                    </v-flex>
                </v-layout>
            </v-card-title>
            <v-data-table :headers="headers" :items="desserts" :search="search">
                <template slot="items" slot-scope="props">
                    <td class="text-xs-left">{{ props.item.datasource_info.datasource_name }}</td>
                    <td class="text-xs-left">{{ props.item.datasource_info.datasource_type }}</td>
                    <td class="text-xs-left">{{ props.item.datasource_info.datasource_property }}</td>
                    <td class="text-xs-left">{{ props.item.datasource_info.database_type}}</td>
                    <td class="text-xs-left">
                        <v-tooltip bottom>
                            <v-icon slot="activator" class="iconFormat">fa-copy</v-icon>
                            <span>Copy</span>
                        </v-tooltip>
                         <v-tooltip bottom>
                            <v-icon slot="activator" class="iconFormat">fa-edit</v-icon>
                            <span>Edit</span>
                        </v-tooltip>
                         <v-tooltip bottom>
                            <v-icon slot="activator" class="iconFormat">fa-trash-alt</v-icon>
                            <span>Delete</span>
                        </v-tooltip>
                    </td>
                </template>
                <v-alert slot="no-results" :value="true" color="error" icon="warning">
                    Your search for "{{ search }}" found no results.
                </v-alert>
            </v-data-table>
        </v-card>
    </v-container>
</template>
<script>
import { post as postToServer } from './../../methods/serverCall.js';
import datasourcelist from '../../data/dataSourceList.js';
import Breadcrumb from "../Breadcrumbs.vue"
  export default {
    name: "datasourcelist",
    components: {
         Breadcrumb
      },
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Datasource Name',
            align: 'left',
            // sortable: false,
            value: 'datasource_info.datasource_name'
          },
          { text: 'Datasource Type', value: 'datasource_info.datasource_type' },
          { text: 'Datasource Property', value: 'datasource_info.datasource_property' },
          { text: 'Database Type', value: 'datasource_info.database_type' },
          { text: 'Action',sortable: false},
         
        ],
        desserts: datasourcelist,
      }
    },
    mounted() {
      // this.getDataSourceList();
    },
    methods: {
      addDataSource(event){
        let _this = this;
          _this.$router.push('/createdatasource');
       
      },
    }
  }
</script>
<style>
.iconFormat{
    margin-right: 5px;
    cursor: pointer;
}
</style>

