import Vue from 'vue'
import Router from 'vue-router';
import approve from '../components/approve.vue';
import newDatasource from '../components/datasources/datasource.vue';
import datasourcelist from '../components/datasources/datasourceList.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/approve',
        name: 'approve',
        component: approve,
        meta: {
            breadcrumb: 'Home / approve'
        }
    }, {
        path: '/datasourcelist',
        name: 'datasourcelist',
        component: datasourcelist,
        meta: {
            breadcrumb: 'Home / Datasource List'
        }
    }, {
        path: '/createdatasource',
        name: 'createdatasource',
        component: newDatasource,
        meta: {
            breadcrumb: 'Home / Create Datasource'
        }
    }]
})