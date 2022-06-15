<template>
  <v-container fluid>
    <v-sheet class="mx-auto" elevation="8" max-width="1300">
      <v-slide-group
        v-model="model"
        class="pa-4"
        show-arrows
        mandatory
        center-active
      >
        <v-slide-item
          v-for="place in places"
          :key="place._id"
          v-slot="{ active, toggle }"
          @change="saveSelected(place)"
        >
          <v-card
            :color="active ? '#FFDF6E' : 'white'"
            border-color="#FFDF6E"
            class="ma-4 rounded-xl"
            height="200"
            width="300"
            @click="toggle"
          >
            <v-row class="fill-height" align="center" justify="center">
              <v-scale-transition />

              <v-card-text class="textoBasic6">
                {{ place.lugar }}
                <br />
                {{ place.horario }}
                <br />
                {{ place.fecha }}
              </v-card-text>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>

      <v-expand-transition>
        <v-sheet v-if="model != null" height="100" tile>
          <v-row class="fill-height" align="center" justify="center">
            <v-btn
              flat
              x-large
              rounded
              class="textoTitulo4"
              color="#FFDF6E"
              @click="storePlace()"
              >CONFIRMAR</v-btn
            >
          </v-row>
        </v-sheet>
      </v-expand-transition>
    </v-sheet>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Seleccion",

  data: () => {
    return {
      selection: {},
      model: null,
    };
  },
  methods: {
    storePlace() {
      localStorage.setItem("place", JSON.stringify(this.selection));
      this.$router.push("/contacto");
    },
    saveSelected(place) {
      this.selection = place;
    },
  },
  computed: {
    ...mapGetters({ places: "getPlaces" }),
  },
};
</script>
