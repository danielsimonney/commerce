<template>
  <div>
    <h1>Mon e-commerce</h1>
    <div class="product">
      <div v-for="article in articles" :key="article.id">
        <Product
          :title="article.name"
          :img="article.img"
          :seller="article.seller"
          :price="article.price"
          :id="article.id"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Product from "../components/ProductListItem";
export default {
  components: {
    Product
  },
  name: "homepage",
  computed: {
    articles() {
      return this.$store.getters.products;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product {
  display: flex;
  flex-direction: row;
}
</style>
