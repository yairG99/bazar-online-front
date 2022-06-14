<template>
  <div class="text-center">
    <!-- <v-btn dark color="orange darken-2" @click="visible = true">
      Open Snackbar
    </v-btn> -->

    <v-snackbar
      v-model="visible"
      rounded="pill"
      color="red darken-4"
      elevation="24"
    >
      <strong>{{ text }}</strong>
      <template v-slot:action="{ attrs }">
        <v-btn color="black" text v-bind="attrs" @click="toggleValidity">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "SnackAlert",
  props: {
    // visible: false,
    text: String,
  },
  data: () => ({}),
  computed: {
    ...mapGetters({ visible: "getValidState" }),
  },
  methods: {
    ...mapMutations(["toggleValidity"]),
  },
};
</script>
