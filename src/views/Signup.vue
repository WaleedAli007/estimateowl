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

            <nav class="nav nav-tabs nav-justified mb-3">
                <router-link class="nav-item nav-link" :to="{name: 'Login'}">Login</router-link>
                <router-link class="nav-item nav-link active" :to="{name: 'Signup'}">Sign Up</router-link>
            </nav>
            <form ref="signupForm">
                <div class="form-group text-left">
                    <b-form-input id="nameInput"
                            v-model.trim="user.name"
                            type="text"
                            class="form-control form-control-lg"
                            :state="nameState"
                            @input="$v.user.name.$touch()"
                            @blur="$v.user.name.$touch()"
                            aria-describedby="inputLiveHelp inputLiveFeedbackFn"
                            placeholder="Enter Name"></b-form-input>
                    <b-form-invalid-feedback id="inputLiveFeedbackFn">
                    <!-- This will only be shown if the preceeding input has an invalid state -->
                        {{nameErrors[0]}}
                    </b-form-invalid-feedback>
                <!-- <input type="email" id="newFirstName" class="form-control form-control-lg" placeholder="First name" value="" required autofocus> -->
                </div>
                <div class="form-group text-left">
                    <b-form-input id="emailInput"
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
                    <b-form-input id="passwordInput"
                                v-model.trim="user.password"
                                type="password"
                                class="form-control form-control-lg"
                                :state="passwordState"
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
                    <a class="btn btn-lg btn-primary btn-block" @click="signup">Create an account</a>
                </div>
            </form>
            <!-- <div class="form-row">
            <div class="col-6">
                <div class="form-group text-left">
                <input type="email" id="newFirstName" class="form-control form-control-lg" placeholder="First name" value="" required autofocus>
                </div>
            </div>
            <div class="col-6">
                <div class="form-group text-left">
                <input type="email" id="newLastName" class="form-control form-control-lg" placeholder="Last name" value="" required>
                </div>
            </div>
            </div>
            <div class="form-group text-left">
            <input type="email" id="newEmail" class="form-control form-control-lg" placeholder="Email address" required>
            </div>
            <div class="form-group text-left">
            <input type="password" id="newPassword" class="form-control form-control-lg" placeholder="Choose a password" required>
            </div> -->

            <fieldset class="title mb-1">
            <legend class="font-15 text-center">Or sign in with</legend>
            </fieldset>

            <p class="mb-1 text-center">
                <a href="#" class="btn btn-lg btn-primary facebook-login-button mr-2"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="btn btn-lg btn-primary twitter-login-button"><i class="fab fa-twitter"></i></a>
                <a href="#" class="btn btn-lg btn-primary google-login-button ml-2"><i class="fab fa-google"></i></a>
            </p>

            <p class="mt-3 mb-0 text-center font-12 text-muted">&copy; 2018 EstimateOwl.com</p>

        </div>
    </div>

  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email, minLength, maxLength, alpha } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  validations: {
    user: {
      name: { required, maxLength: maxLength(100) },
      email: { required, email, maxLength: maxLength(100)  },
      password: { required, minLength: minLength(8)  }
    }
  },
  name: 'signup',
  data () {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      },
      emailState: true,
      passwordState: true,
      nameState: true
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
    nameErrors () {
      const errors = []
      if (!this.$v.user.name.$dirty) return errors
      !this.$v.user.name.maxLength && errors.push('Name must not be more than 100 characters')
      !this.$v.user.name.required && errors.push('Name is required.')
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
    signup () {
      if (!this.$v.user.$invalid) {
        this.$auth.login(this.user, 'Dashboard')
      } else {
        this.emailState = false
        this.passwordState = false
        this.nameState = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
