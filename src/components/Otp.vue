<template>
  <v-container fluid>
    <v-row class="mt-10">
      <v-col cols="12" sm="5"></v-col>
      <v-col cols="12" sm="6">
        <span class="TextoTitulo10 negroTitulo ml-n7">TOKEN</span>
      </v-col>
      <v-col cols="12" sm="1"> </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3"></v-col>
      <v-col cols="12" sm="6" class="textoBasic31">
        Te pasamos un token a tu correo, ayudanos a ponerlo aquí para poder
        mandarte el recibo de tu orden
      </v-col>
      <v-col cols="12" sm="3"></v-col>
    </v-row>
    <v-row class="mt-10">
      <v-col cols="12" sm="4"></v-col>
      <v-col cols="12" sm="3" class="ml-16">
        <v-otp-input class="outlined" length="6" v-model="otp"></v-otp-input>
      </v-col>
      <v-col cols="12" sm="5"></v-col>
    </v-row>
    <v-row fluid>
      <v-col cols="12" sm="5"></v-col>
      <v-col cols="12" sm="2" class="ml-10">
        <v-btn
          x-large
          rounded
          class="mt-8 textoTitulo4"
          v-on:click="Login"
          color="#FFDF6E"
          >CONTINUAR</v-btn
        >
      </v-col>
      <v-col cols="12" sm="3"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { BASE_URL, ENDPOINTS } from "../constants";
import { mapActions } from "vuex";

export default {
  name: "Otp",
  data: () => ({
    otp: "",
    token: "",
  }),
  methods: {
    ...mapActions(["set_Bandera", "set_Auth"]),
    Login() {
      if (this.otp.length < 6) {
        this.set_Bandera(true);
      } else {
        const url = BASE_URL + ENDPOINTS.CLIENTS.LOGIN;
        console.log("Log : ", this.otp);
        axios.post(url, { token: this.otp }).then(
          (response) => {
            this.token = response.data.token;
          },
          (error) => {
            console.log(error);
          }
        );
        this.overlay = !this.overlay;
      }
    },
  },
  computed: {
    labels() {
      return this.token;
    },
  },
  watch: {
    token: {
      handler: async function (value) {
        const url =
          BASE_URL + ENDPOINTS.CLIENTS.VERIFY + this.$store.state.cliente_id;
        const options = {};
        const headers = {
          headers: {
            Authorization: `Bearer ${value}`,
          },
        };
        try {
          let data = (await axios.post(url, options, headers)).data;
          this.$store.dispatch("set_Auth", data.valor.verificado);
        } catch (error) {
          console.error(error);
          this.$store.dispatch("set_Auth", false);
          this.$store.dispatch("set_Bandera", true);
        }
        this.$router.push({ path: "/orden" });
      },
    },
  },
};
</script>
