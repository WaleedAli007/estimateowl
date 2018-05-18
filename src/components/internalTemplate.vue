<template>
  <div>
      <nav class="navbar navbar-expand-md navbar-light bg-metal navbar-toggleable-md">
            <a class="navbar-brand" href="dashboard.html">
                <img src="../assets/EstimateOwl_icon.png" id="logo-icon" alt="Owl">&nbsp;
                EstimateOwl
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navlinks-container" aria-controls="navlinks-container" aria-expanded="false" aria-label="Toggle navigation">
                <i class="material-icons">menu</i>
            </button>
            <div class="collapse navbar-collapse" id="navlinks-container">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" @click="signout">Sign out</a>
                </li>
                <!-- <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="#">Notifications <small><sup><span class="badge badge-success">1</span></sup></small></a>
                </li> -->
                <!-- <li class="nav-item dropdown d-none d-md-block">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Super User
                    </a>
                    <div class="dropdown-menu dropdown-menu-right mt-1" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="dashboard.html">Home</a>
                    <a class="dropdown-item" href="#">Account</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="login.html">Sign out</a>
                    </div>
                </li> -->
                <li class="nav-item my-1 d-md-none">
                    <div class="d-block" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="dashboard.html">Dashboard</a>
                    <!-- <a class="dropdown-item" href="#">Notifications <small><sup><span class="badge badge-success">1</span></sup></small></a>
                    <a class="dropdown-item" href="#">My Account</a>
                    <a class="dropdown-item" href="#">Help</a> -->
                    <a class="dropdown-item" href="login.html">Sign out</a>
                    </div>
                </li>
                </ul>
            </div>
        </nav>

  </div>
</template>

<script>
export default {
  name: 'internal-template',
  data () {
    return {
    }
  },
  methods: {
    signout () {
      this.$auth.logout()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
