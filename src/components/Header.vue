<template>
  <header>
    <nav class="navbar navbar-light bg-light">
      <router-link :to="{ path: '/'}">Home</router-link>
      <form class="form-inline">
        <router-link :to="{ path: '/basket'}">
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >Panier ({{cart.length}})</button>
        </router-link>
      </form>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  computed: {
    cart() {
      return this.$store.getters["cart"];
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  position: fixed;
  width: 100%;
}
</style>
