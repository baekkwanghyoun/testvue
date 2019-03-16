<template>
  <v-content>
    <v-container>
      <v-layout align-center justify-center>
        <v-flex md6>
          <v-alert :value="alert" type="error" transition="scale-transition">
            {{error}}</v-alert>
        </v-flex>        
      </v-layout>

      <v-layout align-center justify-center> 

        <v-flex md6>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login form</v-toolbar-title>
            </v-toolbar>

            <v-card-text>
              <v-form ref="form">
                <v-text-field
                  name="email"
                  label="Email"
                  id="email"
                  v-model="email"
                  v-validate="'required|email'"
                  :error-messages="errors.collect('email')"
                ></v-text-field>

                <v-text-field
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                  v-model="password"
                  v-validate="'required'"
                  :error-messages="errors.collect('password')"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="onSubmit">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { auth, setAuthInHeader } from "../api";

export default {
  data() {
    return {
      alert:false,      
      email: "test@test.com",
      password: "123123",
      error: "",
      rPath: ""
    };
  },
  created() {
    this.rPath = this.$route.query.rPath || "/";
  },
  methods: {
    onSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          auth
            .login(this.email, this.password)
            .then(data => {
              localStorage.setItem("token", data.accessToken);
              setAuthInHeader(data.accessToken);
              this.$router.push(this.rPath);
              console.log(this.rPath);
            })
            .catch(err => {
              this.alert = true;
              this.error = err.data.error; 
            });
          return;
        }

        alert("Correct them errors!");
      });
    }
  }
};
</script>

<style>
</style>
