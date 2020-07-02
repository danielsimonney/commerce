<template>
  <div>
    <div v-if="cart.length===0" class="empty">Votre panier est actuellement vide</div>
    <ul class="list-group list-group-flush">
      <li v-for="article in cart" :key="article.id" class="list-group-item">
        {{article.name}} quantité: {{article.quantity}} prix: {{article.price}}€ prix total : {{article.price * article.quantity}}€
        <label>Changer la quantité</label>
        <input type="number" :id="article.id" />
        <button
          type="button"
          v-on:click="changeqt(article.id)"
          class="btn btn-warning"
        >Mettre a jour la quantité</button>
        <button
          type="button"
          v-on:click="supress(article.id)"
          class="btn btn-danger"
        >Supprimer le produit</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "basket",
  computed: {
    cart() {
      return this.$store.getters["cart"];
    }
  },
  methods: {
    ...mapActions(["supressProduct", "changeQuantity"]),
    supress(id) {
      console.log("supress");
      this.supressProduct({
        id
      });
    },
    changeqt(id) {
      let newqt = document.getElementById(id).value;
      let obj = { id: id, quantity: newqt };
      this.changeQuantity({
        obj
      });
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
header {
  position: fixed;
  width: 100%;
}
</style>
