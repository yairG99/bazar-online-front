<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",

  mounted() {
    this.$store.dispatch("getProducts");
    this.$store.dispatch("getPlaces");
  },

  methods: {
    ...mapGetters(["getCart"]),
  },

  created() {
    this.getCart();
  },
};
</script>
