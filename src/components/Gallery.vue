<template>
  <v-container>
    <v-row>
      <v-col
        v-for="product in products"
        :key="product.id"
        class="d-flex child-flex menosMargen imagenesDual"
        cols="4"
      >
        <!-- <v-card flat outlined class="acomodo"> -->
        <v-card flat>
          <v-img
            :src="src(product)"
            aspect-ratio="1"
            class="grey lighten-2 imagenAspecto"
          >
            <v-btn
              text
              fab
              class="botonAgregar"
              @click="addToCart(product._id)"
            >
              <v-img
                contain
                max-height="50"
                max-width="50"
                src="../assets/BagAdd.png"
              >
              </v-img>
            </v-btn>

            <Carrucel />

            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-text class="text--primary" id="Texto">
            <div>{{ product.title }}</div>
            <div>Talla:{{ product.size }}</div>
            <div>${{ product.price }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Carrucel from "./Carrucel.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Gallery",

  data: () => {
    return {};
  },
  methods: {
    ...mapActions(["addToCart"]),
    src(product) {
      let src = require("../assets/img-producto/" + product.src);
      return src;
    },
  },
  computed: {
    ...mapGetters({ products: "getProducts" }),
  },
  components: {
    Carrucel,
  },
};
</script>
