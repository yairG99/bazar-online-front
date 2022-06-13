<template>
  <v-app>
    <v-container fluid>
      <v-container>
        <v-row class="mt-10">
          <v-col cols="12" sm="10">
            <v-row>
              <span class="TextoTitulo amarilloTitulo">Check</span>
            </v-row>
            <v-row>
              <span class="TextoTitulo amarilloTitulo mt-n9">Out</span>
            </v-row>
          </v-col>
          <v-col cols="12" sm="2">
            <v-btn x-large fab dark to="/bag">
              <v-icon x-large>mdi-arrow-left</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="mt-4 textoTitulo5">
          <p>Dónde y cuando te entregamos:</p>
        </v-row>
      </v-container>

      <Seleccion />
    </v-container>
  </v-app>
</template>

<script>
import Seleccion from "../components/Seleccion.vue";

export default {
  name: "Checkout",

  components: {
    Seleccion,
  },
};
</script>
