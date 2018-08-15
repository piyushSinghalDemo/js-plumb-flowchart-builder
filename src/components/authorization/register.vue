<template>
  <div id="register">
    <v-container style="padding-top:10px">
      <v-layout id="regirsterContainer" row wrap>
        <v-flex xs6 offset-xs3>
          <v-layout justify-center style="margin-bottom: 2%">
              <img src="../../assets/images/essentio.png" alt="Smiley face">
          </v-layout>
          <v-layout row wrap style="background: white;padding: 40px;border-radius: 15px">
            <v-flex xs12>
              <v-text-field label="Company Name" append-icon="fa-building"></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field label="First Name" append-icon="fa-user" style="width:90%"></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field label="Last Name" append-icon="fa-user" style="width:90%;float:right"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Email" append-icon="fa-envelope"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Mobile Number" append-icon="fa-mobile-alt"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Password" append-icon="fa-lock"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Confirm Password" append-icon="fa-lock"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-checkbox label="I agree erpdata.cloud's Terms and condition."></v-checkbox>
            </v-flex>
            <v-flex xs12>
              <v-btn color="success" large block>Register</v-btn>
            </v-flex>
            <v-flex xs12>
              <span>Already have an account?</span>
              <a style="color:darkred !important">Login</a>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12 style="margin-top:8%">
              <span style="color:white">@ Copyright 2018 Essentio Software LLC.All right reserved</span>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Register',
    data() {
      return {
        // backgroundImage: 'https://www.w3schools.com/images/lamp.jpg',
        backgroundImage: require('../../assets/images/LasVegas.jpg'),
      }
    },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
