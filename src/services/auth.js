import Vue from 'vue'
import router from '../router'
import store from '../store'

/**
 * @var{string} LOGIN_URL The endpoint for logging in. This will be used once we would have an API for auth.
 */
const LOGIN_URL = process.env.API_KEY + 'api/auth/login'


/**
* Auth Plugin
*
* Handles login and token authentication.
*/
export default {

  /**
   * Install the Auth class.
   *
   * Creates a Vue-resource http interceptor to handle automatically adding auth headers
   * and refreshing tokens. Then attaches this object to the global Vue (as Vue.auth).
   *
   * @param {Object} Vue The global Vue.
   * @param {Object} options Any options we want to have in our plugin.
   * @return {void}
   */
  install (Vue, options) {
    // Vue.http.interceptors.push((request, next) => {
    //   const token = store.state.auth.accessToken
    //   const hasAuthHeader = request.headers.has('Authorization')

    //   if (token && !hasAuthHeader) {
    //     this.setAuthHeader(request)
    //   }

    //   next((response) => {
    //     if (this._isInvalidToken(response)) {
    //       return this._refreshToken(request)
    //     }
    //   })
    // })

    Vue.prototype.$auth = Vue.auth = this
  },

  /**
   * Login
   *
   * @param {Object.<string>} credentials The username and password for logging in.
   * @param {string|null} redirect The name of the Route to redirect to.
   * @return {Promise}
   */
  login (credentials, redirect) {
    // const params = { 'grant_type': 'authorization_code', 'username': credentials.username, 'password': credentials.password }
    this._storeToken(credentials)
    if (redirect) {
      router.push({ name: redirect })
    }
    // An actual REST call to the login endpoint, will be used once integrated with the API.

    // return Vue.http.post(LOGIN_URL, credentials)
    //   .then((response) => {
    //     if (response.body.token) {
    //       this._storeToken(response)
    //       if (redirect) {
    //         router.push({ name: redirect })
    //       }
    //     } else {
    //       return response.body
    //     }
    //     return response
    //   })
    //   .catch((errorResponse) => {
    //     return errorResponse
    //   })
  },

  /**
   * Logout
   *
   * Clear all data in our Vuex store (which resets logged-in status) and redirect back
   * to login form.
   *
   * @return {void}
   */
  logout () {
    store.commit('CLEAR_ALL_DATA')
    router.push({ name: 'Login' })
  },

  /**
   * Store tokens and user info in localstorage in localstorage
   *
   * Update the Vuex store with the access/refresh tokens received from the response from
   * the Oauth2 server.
   *
   * @private
   * @param {Response} response Vue-resource Response instance from an OAuth2 server.
   *      that contains our tokens.
   * @return {void}
   */
  _storeToken (response) {
    const auth = store.state.auth
    const user = store.state.user
    auth.isLoggedIn = true
    user.email = response.email
    user.displayName = response.email
    user.loggedInAt = new Date()

    store.commit('UPDATE_AUTH', auth)
    store.commit('UPDATE_USER', user)
  },

  /**
   * Check if the Vue-resource Response is an invalid token response.
   *
   * @private
   * @param {Response} response The Vue-resource Response instance received from an http call.
   * @return {boolean}
   */
  _isInvalidToken (response) {
    const status = response.status
    const error = response.error

    return (status === 401 && (error === 'invalid_token' || error === 'expired_token'))
  }
}
