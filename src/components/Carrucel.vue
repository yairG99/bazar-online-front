<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="550px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text fab class="botonInfo" fabv-bind="attrs" v-on="on"
          ><img src="../assets/Plus.png" height="58"
        /></v-btn>
      </template>
      <v-card max-width="600">
        <v-carousel
          :continuous="false"
          hide-delimiter-background
          light
          delimiter-icon="mdi-circle"
          class="carrucelImg"
        >
          <v-carousel-item>
            <v-img
              src="../assets/img-producto/imagen1.jpg"
              max-height="550"
              max-width="550"
              aspect-ratio="1"
              class="Medio"
            ></v-img>
          </v-carousel-item>

          <v-carousel-item>
            <v-img
              src="../assets/img-producto/imagen1.jpg"
              max-height="550"
              max-width="550"
              aspect-ratio="1"
              class="Medio"
            ></v-img>
          </v-carousel-item>

          <v-btn
            color="ligth-gray"
            text
            fab
            small
            @click="dialog = false"
            class="Medio cancelar"
          >
            <v-icon dense color="#808080">mdi-close-circle</v-icon>
          </v-btn>
        </v-carousel>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Gallery from "./Gallery.vue";

export default {
  name: "Carrucel",
  data() {
    return {
      dialog: false,
      items: [
        {
          id: 1,
          src: require("../assets/img-producto/imagen1.jpg"),
        },
        {
          id: 2,
          src: require("../assets/img-producto/imagen2.jpg"),
        },
        {
          id: 3,
          src: require("../assets/img-producto/imagen3.jpg"),
        },
        {
          id: 4,
          src: require("../assets/img-producto/imagen4.jpg"),
        },
        {
          id: 5,
          src: require("../assets/img-producto/imagen5.jpg"),
        },
      ],
    };
  },
  components: {
    Gallery,
  },
};
</script>
