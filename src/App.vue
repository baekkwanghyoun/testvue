<template>
  <v-app>
    <Navbar/>

     <v-content>
      <v-container fluid fill-height>
        <v-layout justify-left align-start>
          <router-view></router-view>
        </v-layout>
      </v-container>
     </v-content>

  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: "app",
  components: {
    Navbar
  },
  data() {
    return {
      //
    };
  }
};
</script>
