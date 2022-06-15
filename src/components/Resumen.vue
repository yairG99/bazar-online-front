<template>
  <v-card min-width="350" fluid class="ml-n16 mt-16">
    <v-row>
      <v-card-text class="textoTitulo34 mt-5"> Resumen: </v-card-text>
    </v-row>
    <v-row>
      <v-card-text class="ml-4 mb-n2 textoBasic">
        Te esperamos en:
        <v-spacer class="textoBasic11">
          <!-- Cancha del Árbol el Martes 31 de Mayo de 10:00 am a 12:00 pm. -->
          {{ lugar.lugar }} de {{ lugar.horario }} el día
          {{ lugar.fecha }}
        </v-spacer>
      </v-card-text>
    </v-row>

    <v-row class="mb-5">
      <v-card-text class="ml-4 mb-n8 textoBasic">
        Ahí te cobraremos:
        <v-spacer class="textoBasic11">
          ${{ sum(cart.valPedido, cart.envPlat) }}.00</v-spacer
        >
      </v-card-text>
    </v-row>

    <v-row class="mb-5">
      <v-card-text class="ml-4 textoBasic">
        Muchas gracias por comprar con nosotros:)
      </v-card-text>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Resumen",
  data: () => {
    return {
      lugar: "",
    };
  },
  methods: {
    sum: (value1, value2) => {
      return value1 + value2;
    },
  },
  computed: {
    ...mapGetters({ cart: "getCart" }),
  },
  mounted() {
    if (localStorage.getItem("place")) {
      try {
        this.lugar = JSON.parse(localStorage.getItem("place"));
      } catch (e) {}
    }
  },
  components: {},
};
</script>
