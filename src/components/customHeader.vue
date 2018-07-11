<template>
  <div style="position: fixed;width: 100%;z-index: 2;">
    <b-navbar toggleable="md" class="main-header">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">
        <!-- NavBar -->
          <img class="cust-logo" src="../assets/images/logo.png" />
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav class="nav-items">
          <!-- <b-nav-item >Run</b-nav-item> -->
          <b-nav-item-dropdown text="Run">
            <b-dropdown-item href="#">Completed</b-dropdown-item>
            <b-dropdown-item href="#">Ended</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item >
            <router-link to="/approve">Approve</router-link>
          </b-nav-item>
          <b-nav-item >Archives</b-nav-item>
          <b-nav-item>Configure</b-nav-item>
          <!-- <b-nav-item >Admin</b-nav-item> -->
          <b-nav-item-dropdown text="Configure">
            <b-dropdown-item href="#">Polices</b-dropdown-item>
            <b-dropdown-item href="#">Designer</b-dropdown-item>
            <b-dropdown-item href="#">Environments</b-dropdown-item>
            <b-dropdown-item href="#">Email</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Admin">
            <b-dropdown-item>
              <router-link to="/datasourcelist">Data Sources</router-link>
              <!-- Users -->
              </b-dropdown-item>
            <b-dropdown-item href="#">Users</b-dropdown-item>
            <b-dropdown-item href="#">LDAP</b-dropdown-item>
            <b-dropdown-item href="#">Security Roles</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-item><i class="fas fa-cog"></i></b-nav-item> -->
          <b-nav-item-dropdown right>
            <template slot="button-content">
              <em><i class="fas fa-cog"></i></em>
            </template>
            <b-dropdown-item href="#">Dashboard</b-dropdown-item>
            <b-dropdown-item href="#">Users</b-dropdown-item>
          </b-nav-item-dropdown>
          <!-- <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form> -->

          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Edit Profile</b-dropdown-item>
            <b-dropdown-item href="#">Change Password</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    <!-- <hi>Header Demo</hi> -->
  </div>
</template>
<script>
export default {
  name: "customHeader"
}
</script>

<style>
.main-header {
  background-color: #7460ee;
  position: fixed;
  width: 100%;
  height: 60px;
}
.cust-logo{
    width: 150px;
    /* background: white; */
     /* background-color: #7460ee; */
    height: 50px;
}
/* .white{
color: white !important;  
} */
.nav-link{
color: #cbbde2 !important;
margin-right: 40px;
}
.nav-link:hover{
color: white !important;
}
</style>
