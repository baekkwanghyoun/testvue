<template>
  <div>Card
    <div v-if="loading">Loading Board....</div>
    <div v-else>
      <div>{{cid}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Drawer2",
  data() {
    return {
      cid: 0,
      loading: false
    };
  },
  watch: {
    $route: {
      handler: "fetchData",
      immediate: true
    }
    // $route() {
    //     this.fetchData()
    // }
  },
  //   created() {
  //     this.fetchData()
  //   },
  methods: {
    fetchData() {
      this.loading = true;
      setTimeout(() => {
        this.cid = this.$route.params.cid;
        this.loading = false;
      }, 500);
    }
  },
  mounted() {}
};
</script>