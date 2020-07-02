<template>
  <router-link :to="{ path: '/product/'+id}">
    <div class="card" style="width: 18rem;">
      <div class="card-header">{{ title }}</div>
      <img class="card-img-top" :src="img" alt="Card image cap" />
      <div class="card-body">
        <p class="card-text">Prix : {{ price }}€</p>
        <p class="card-text">Vendeur : {{ seller }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProductListItem",
  props: {
    title: String,
    img: String,
    seller: String,
    price: String,
    id: Number
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  height: 500px;
  margin-left: 30px;
}
</style>
