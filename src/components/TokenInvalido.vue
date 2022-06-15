<template>
  <v-row justify="center">
    <v-dialog v-model="this.$store.state.bandera" max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          El token introducido <strong>no es válido</strong>.
        </v-card-title>

        <v-card-text> Por favor, introduce un token válido :) </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "TokenInvalido",

  data: () => ({
    banderaF: false,
  }),
  methods: {
    bandera() {
      this.$store.dispatch("set_Bandera", false);
    },
  },
};
</script>
