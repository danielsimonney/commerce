<template>
  <div>
    <h1>{{article.name}}</h1>
    <div>User {{ $route.params.id }}</div>
    <img class="card-img-top" :src="article.img" alt="Card image cap" />
    Voulez vous ajouter un produit à votre panier
    <label for="quantity">Quantité du produit</label>
    <input name="quantity" type="number" v-model.number="quantity" />
    <button v-on:click="add">Ajouter le produit au panier</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "product",
  computed: {
    article() {
      return this.$store.getters["one_product"](this.$route.params.id);
    }
  },
  methods: {
    ...mapActions(["addProduct"]),
    add() {
      let article = { ...this.article };
      article.quantity = this.quantity;
      if (article.quantity === undefined) {
        alert("Vous devez rentrer une quantité à votre produit");
      } else {
        this.addProduct({
          article
        });
        this.$router.push("/");
      }
    }
  },
  data: function() {
    return {
      quantity: undefined
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product {
  display: flex;
  flex-direction: row;
}
.card-img-top {
  height: 250px;
  object-fit: contain;
}
</style>
