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
            <!-- <h1>Template Added</h1>
               <div id="diagramContainer">
                    <div id="item_left" class="item"></div>
                    <div id="item_right" class="item" style="margin-left:50px;"></div>
                </div> -->
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
    'customHeader': customHeader
  },
  mounted() {
    // setTimeout(()=>{
    //   this.initilzeJsPlumb();
    // },4000);
  },
  methods: {
    initilzeJsPlumb() {
      jsPlumb.ready(function () {
        jsPlumb.setContainer("diagramContainer");

        var common = {
          isSource: true,
          isTarget: true,
          connector: ["Straight"]
        };

        jsPlumb.addEndpoint("item_left", {
          anchors: ["Right"]
        }, common);

        jsPlumb.addEndpoint("item_right", {
          anchor: "Left"
        }, common);

        jsPlumb.addEndpoint("item_right", {
          anchor: "Right"
        }, common);
      });
    },
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
