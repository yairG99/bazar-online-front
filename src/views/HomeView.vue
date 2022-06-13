<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="11"> </v-col>
      <v-col cols="12" sm="1">
        <v-btn fab x-large fixed to="/bag">
          <v-img contain max-height="40" src="../assets/IconoBag.png">
            <p class="cartItems">{{ cart.productos.length }}</p>
          </v-img>
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <Gallery />
    </v-row>

    <v-row class="mt-16">
      <v-footer>
        <Footer />
      </v-footer>
    </v-row>
  </v-container>
</template>

<script>
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import { mapState } from "vuex";

export default {
  name: "Home",

  components: {
    Gallery,
    Footer,
  },
  computed: {
    ...mapState({ cart: "cart" }),
  },
};
</script>
