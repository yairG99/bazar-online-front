<template>
  <v-card min-width="350" fluid class="ml-n16 mt-16">
    <v-row>
      <v-card-text class="textoTitulo3 mt-5"> Pago Final: </v-card-text>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card-text class="textoBasic2"> Valor del pedido: </v-card-text>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card-text class="textoBasic3">
          ${{ cart.valPedido }}.00
        </v-card-text>
      </v-col>
    </v-row>
    <v-row class="mt-n10 mb-5">
      <v-col cols="12" sm="8">
        <v-card-text class="textoBasic2"> Envío y Plataforma: </v-card-text>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card-text class="textoBasic3"> ${{ cart.envPlat }}.00 </v-card-text>
      </v-col>
    </v-row>
    <v-card outlined>
      <v-card-text class="textoBasic4">
        Total: ${{ sum(cart.valPedido, cart.envPlat) }}.00
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Recibo",
  methods: {
    sum: (value1, value2) => {
      return value1 + value2;
    },
  },
  computed: {
    ...mapGetters({ cart: "getCart" }),
  },
};
</script>
