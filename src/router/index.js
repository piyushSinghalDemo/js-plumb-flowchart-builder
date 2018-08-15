import Vue from 'vue'
import Router from 'vue-router';
import datasourcelist from '../components/datasources/datasourceList.vue'
import Register from '../components/authorization/register.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/Register',
        name: 'Register',
        component: Register,
        meta: {
            breadcrumb: 'Home / Register'
        }
    }, {
        path: '/',
        name: 'datasourcelist',
        component: datasourcelist,
        meta: {
            breadcrumb: 'Home / Datasource List'
        }
    }]
})