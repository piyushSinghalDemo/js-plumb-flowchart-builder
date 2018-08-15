<style>
  @import "./assets/fontawesome-free-5.1.0-web/css/all.css";
</style>

<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <customHeader></customHeader> -->
   <!-- <register></register> -->
      <v-app>
          <div class="" :style="{'background-image': 'url(' + backgroundImage + ')', 'background-size': '100% 100%','border-top': '4px solid red'}">
          <register></register>
        <!-- <v-content>
          <v-container class="background">
              <router-view ></router-view>      
          </v-container>
        </v-content> -->
          </div> 
      </v-app>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import customHeader from './components/customHeader.vue'
import Register from './components/authorization/register'
export default {
  name: 'app',
  data() {
      return {
        // backgroundImage: 'https://www.w3schools.com/images/lamp.jpg',
        backgroundImage: require('./assets/images/LasVegas.jpg'),
      }
    },
  components: {
    // HelloWorld,
    'customHeader': customHeader,
    'register':Register
  },
  mounted() {
  },
  methods: {
  },
}
</script>

<style>
a {
  color: inherit !important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

#diagramContainer {
  padding: 20px;
  width: 80%;
  height: 150px;
  border: 1px solid gray;
}

.item {
  height: 80px;
  width: 80px;
  border: 1px solid blue;
  float: left;
}
</style>
