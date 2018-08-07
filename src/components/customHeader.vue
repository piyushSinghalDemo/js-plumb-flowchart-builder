<template>
  <div class="rd-br">
    <b-navbar toggleable="md" class="main-header ht-70" style="">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#" class="mr-3">
          <img class="cust-logo" src="../assets/images/logo.png" />
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="nav-items mr-2">
          <b-nav-item class="pl-10">
            <div class="pd-5 mr-l-50">
              <i class="fab fa-accusoft" style="display:block;font-size:20px"></i>
              <!-- <span>Run</span>  -->
              <router-link to="/Index" class="btn btn-success">JS-Plumb</router-link>
            </div>
          </b-nav-item>
          <b-nav-item class="">
            <div class="pd-5 mr-l-50">
              <i class="fab fa-accusoft" style="display:block;font-size:20px"></i>
              <!-- <span>Approve</span>  -->
              <router-link to="/Demo" class="btn btn-success">Other-Plumb</router-link>
            </div>
          </b-nav-item>
          <b-nav-item class="pl-10 br-bottom">
            <div class="pd-5 mr-l-50">
              <i class="fab fa-accusoft" style="display:block;font-size:20px"></i>
              <!-- <span>Archive</span>  -->
              <router-link to="/drag" class="btn btn-success">drag</router-link>
            </div>
          </b-nav-item>
          <b-nav-item class="pl-10">
            <div class="pd-5 mr-l-50">
              <i class="fab fa-accusoft" style="display:block;font-size:20px"></i>
              <span>Configure</span> 
            </div>
          </b-nav-item>
          <b-nav-item class="pl-10 br-bottom">
            <div class="pd-5 mr-l-50">
              <i class="fab fa-accusoft" style="display:block;font-size:20px"></i>
              <span>Admin</span> 
            </div>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template slot="button-content">
              <em><i class="fas fa-cog"></i></em>
            </template>
            <b-dropdown-item href="#">Dashboard</b-dropdown-item>
            <b-dropdown-item href="#">Users</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right>
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

  </div>
</template>
<script>
export default {
  name: "customHeader"
}
</script>

<style>
.main-header {
  background-color: black;
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
.rd-br{
  border-top: 6px solid red;
}
.ht-70{
  height: 70px;
}
.mr-3{
  margin-left: 3%
}
.mr-2{
  margin-left: 2%
}
.mr-l-50{
  margin-left: 50%
}
.pd-5{
  padding: 5px 0px;
}
.pl-10{
  padding-left: 10%;
}
.br-bottom{
  border-bottom: 02px solid white;
}
</style>
