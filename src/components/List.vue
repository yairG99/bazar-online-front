<template>
  <v-card outlined color="transparent">
    <v-row v-for="item in items" :key="item.id" class="mt-10">
      <v-col cols="12" sm="2">
        <v-img
          :src="item.src"
          max-height="500"
          max-width="500"
          class="grey lighten-2 imagenAspecto2"
        >
        </v-img>
      </v-col>
      <v-col cols="12" sm="8" class="ml-5">
        <v-row>
          <v-btn x-small text fab id="izquierda">
            <v-icon small>mdi-close-circle</v-icon>
          </v-btn>
        </v-row>
        <v-row class="textoSemi mt-7">
          {{ item.title }}
        </v-row>
        <v-row class="textoBasic mt-6">
          <v-col cols="12" sm="6"> Talla: {{ item.talla }} </v-col>
          <v-col cols="12" sm="6"> Precio: ${{ item.precio }} </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "List",

  data: () => {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/img-producto/imagen4.jpg"),
          title: "Sueter Blanco Encaje",
          talla: "M",
          precio: "120",
        },
        {
          id: 2,
          src: require("../assets/img-producto/imagen1.jpg"),
          title: "Gorra Zara",
          talla: "CH",
          precio: "90",
        },
      ],
    };
  },
};
</script>
