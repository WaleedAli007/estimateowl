<template>
  <div class="h-100 bg-white">
    <div class="d-flex align-items-center h-100">
      <div class="content-slim">

        <div class="mb-4 text-center">
          <span class="navbar-brand">
            <img src="../assets/EstimateOwl_icon.png" id="logo-icon" alt="Owl">&nbsp;
            EstimateOwl
          </span>
        </div>

        <div class="alert alert-success alert-dismissible">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          You were successfully signed out.
        </div>

        <div class="alert alert-success alert-dismissible">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          Please check your email for your password reset link.
        </div>

        <nav class="nav nav-tabs nav-justified mb-3">
          <router-link class="nav-item nav-link active" :to="{name: 'Login'}">Login</router-link>
          <router-link class="nav-item nav-link" :to="{name: 'Signup'}">Sign Up</router-link>
        </nav>
        <form ref="loginForm">
          <div class="form-group text-left">
            <label for="passwordEmail">Email:</label>
            <b-form-input id="passwordEmail"
                          v-model.trim="user.email"
                          type="email"
                          class="form-control form-control-lg"
                          :state="emailState"
                          @input="$v.user.email.$touch()"
                          @blur="$v.user.email.$touch()"
                          aria-describedby="inputLiveHelp inputLiveFeedback"
                          placeholder="Enter your Email"></b-form-input>
            <b-form-invalid-feedback id="inputLiveFeedback">
              <!-- This will only be shown if the preceeding input has an invalid state -->
              {{emailErrors[0]}}
            </b-form-invalid-feedback>
            <!-- <input type="email" v-model="user.email" id="userEmail" class="form-control form-control-lg" placeholder="Email address" required autofocus> -->
          </div>
          <div class="form-group text-left">
            <label for="passwordInput">Password:</label>
            <b-form-input id="passwordInput"
                          v-model.trim="user.password"
                          type="password"
                          class="form-control form-control-lg"
                          :state="emailState"
                          @input="$v.user.password.$touch()"
                          @blur="$v.user.password.$touch()"
                          aria-describedby="inputLiveHelp inputLiveFeedback"
                          placeholder="Enter your password"></b-form-input>
            <b-form-invalid-feedback id="inputLiveFeedback">
              <!-- This will only be shown if the preceeding input has an invalid state -->
              {{passwordErrors[0]}}
            </b-form-invalid-feedback>
            <!-- <input type="password" v-model="user.password" id="userPassword" class="form-control form-control-lg" placeholder="Password" required> -->
          </div>
          <div class="form-group text-left">
            <a class="btn btn-lg btn-primary btn-block" @click="login">Login</a>
          </div>
        </form>
        <p class="text-center font-13">
          <a data-toggle="modal" data-target="#forgotPasswordModal" data-backdrop="static">Forgot password?</a>
        </p>

        <fieldset class="title mb-1">
          <legend class="font-15 text-center">Or sign in with</legend>
        </fieldset>

        <p class="mb-1 text-center">
          <a href="#" class="btn btn-lg btn-primary facebook-login-button mr-2"><i class="fab fa-facebook-f text-white"></i></a>
          <a href="#" class="btn btn-lg btn-primary twitter-login-button"><i class="fab fa-twitter"></i></a>
          <a href="#" class="btn btn-lg btn-primary google-login-button ml-2"><i class="fab fa-google"></i></a>
        </p>

        <p class="mt-3 mb-0 text-center font-12 text-muted">&copy; 2018 EstimateOwl.com</p>

      </div>
    </div>

    <div class="modal" id="forgotPasswordModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Forgot your password?</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form action="#" method="post">
            <div class="modal-body">
              <p>Please enter your email below and we'll send you a reset link:</p>
              <div class="form-group">
                <input type="text" id="fpEmail" class="form-control form-control-lg" placeholder="Email address" value="" required>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-lg btn-default" data-dismiss="modal">Cancel</button>
              <button type="button" class="btn btn-lg btn-success" data-dismiss="modal">Send email</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  validations: {
    user: {
      email: { required, email, maxLength: maxLength(100)  },
      password: { required, minLength: minLength(8)  }
    }
  },
  name: 'login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      passwordError: '',
      emailState: true,
      passwordState: true
    }
  },
  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.user.email.$dirty) return errors
      !this.$v.user.email.email && errors.push('Please enter a valid email address')
      !this.$v.user.email.maxLength && errors.push('Email must not be more than 100 characters')
      !this.$v.user.email.required && errors.push('Email is required.')
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.user.password.$dirty) return errors
      !this.$v.user.password.required && errors.push('Password is required')
      !this.$v.user.password.minLength && errors.push('Password must be at least 8 characters long')
      return errors
    },
  },
  methods: {
    login () {
      if (!this.$v.user.$invalid) {
        this.$auth.login(this.user, 'Dashboard')
      } else {
        this.emailState = false
        this.passwordState = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
