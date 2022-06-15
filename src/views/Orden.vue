<template>
  <v-container>
    <v-row class="mt-10">
      <v-col cols="12" sm="10">
        <v-row>
          <span class="TextoTituloAlt negroTitulo">Tú</span>
        </v-row>
        <v-row>
          <span class="TextoTituloAlt negroTitulo mt-n9">Orden</span>
        </v-row>
      </v-col>
      <v-col cols="12" sm="2"> </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="10">
        <ListX />
      </v-col>
      <v-col cols="12" sm="2">
        <v-row>
          <Resumen />
        </v-row>
      </v-col>
    </v-row>
    <v-row class="mt-16 mb-16">
      <v-col cols="12" sm="4"></v-col>
      <v-col cols="12" sm="4">
        <v-btn rounded color="#ffdf6e" @click="backHome">
          ¿Quieres seguir comprando?
        </v-btn>
      </v-col>
      <v-col cols="12" sm="5"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import ListX from "../components/ListX.vue";
import Resumen from "../components/Resumen.vue";

export default {
  name: "Orden",

  components: {
    ListX,
    Resumen,
  },
  methods: {
    ...mapActions(["CerrarSesion"]),
    backHome() {
      this.CerrarSesion();
      this.$router.puhs("/");
    },
  },
};
</script>
