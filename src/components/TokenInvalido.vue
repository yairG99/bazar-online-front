<template>
  <v-row justify="center">
    <v-dialog
      v-model="this.$store.state.bandera"
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          El token introducido 
          <br>es invalido.
        </v-card-title>

        <v-card-text>
            Porfavor introduce un token valido:)
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    name: 'TokenInvalido',

    data: () => ({
        banderaF: false
    }),
    methods: {
        bandera() {
           this.$store.dispatch("set_Bandera", false);
        }
    },

}
</script>