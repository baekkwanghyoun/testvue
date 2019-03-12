<template>

  <div>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
       <span>N0</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/">Home </router-link> |

      <a href="" v-if="isAuth" @click="logout">Logout</a>
      <router-link v-else to="/login"> Login</router-link>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

  </div>
</template>

<script>
import { setAuthInHeader } from '../api';
export default {
  computed: {
    isAuth() {
      return localStorage.getItem('token')
    }
  },
  methods: {
    logout() {
      delete localStorage.token
      setAuthInHeader(null)
      this.$router.push('/login')
    }
    
  },
}
</script>

<style>

</style>
