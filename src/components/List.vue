<template>
  <v-card outlined color="transparent">
    <v-row v-for="product in cartProducts" :key="product._id" class="mt-10">
      <v-col cols="12" sm="2">
        <v-img
          :src="src(product)"
          max-height="500"
          max-width="500"
          class="grey lighten-2 imagenAspecto2"
        >
        </v-img>
      </v-col>
      <v-col cols="12" sm="8" class="ml-5">
        <v-row>
          <v-btn
            x-small
            text
            fab
            id="izquierda"
            @click="deleteFromCart(product._id)"
          >
            <v-icon small>mdi-close-circle</v-icon>
          </v-btn>
        </v-row>
        <v-row class="textoSemi mt-7">
          {{ product.title }}
        </v-row>
        <v-row class="textoBasic mt-6">
          <v-col cols="12" sm="6"> Talla: {{ product.size }} </v-col>
          <v-col cols="12" sm="6"> Precio: ${{ product.price }} </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "List",

  data: () => {
    return {};
  },

  methods: {
    ...mapActions(["deleteFromCart"]),
    src(product) {
      let src = require("../assets/img-producto/" + product.src);
      return src;
    },
  },

  computed: {
    ...mapGetters({ cartProducts: "getCartProducts" }),
  },
};
</script>
