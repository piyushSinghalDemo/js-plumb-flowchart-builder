<style>
  @import "./assets/fontawesome-free-5.1.0-web/css/all.css";
</style>

<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <customHeader></customHeader>
    <div class="container">
      <v-app style="background-color:white">
        <v-content style="margin-top:6%">
          <v-container class="background">
            <router-view ></router-view>      
          </v-container>
        </v-content>
      </v-app>
    </div>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import customHeader from './components/customHeader.vue'
export default {
  name: 'app',
  components: {
    // HelloWorld,
    'customHeader':customHeader
  }
}
</script>

<style>
a{
  color:inherit !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
