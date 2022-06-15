<template>
  <v-container>
    <form @submit.prevent="RegistrarContacto()">
      <v-row class="mt-10">
        <v-col cols="12" sm="10">
          <v-row>
            <span class="TextoTitulo amarilloTitulo">¿Cómo te</span>
          </v-row>
          <v-row>
            <span class="TextoTitulo amarilloTitulo mt-n9">contactamos?</span>
          </v-row>
        </v-col>
        <v-col cols="12" sm="2">
          <v-btn x-large fab dark to="/checkout">
            <v-icon x-large>mdi-arrow-left</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="mt-16">
        <v-col cols="12" sm="3"></v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            required
            rounded
            outlined
            class="centrar"
            placeholder="email"
            color="#FFDF6E"
            v-model="cliente.email"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3"></v-col>
      </v-row>
      <v-row class="mt-n6">
        <v-col cols="12" sm="3"></v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            class="centrar"
            rounded
            outlined
            placeholder="@ de instagram"
            color="#FFDF6E"
            v-model="cliente.instagram"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3"></v-col>
      </v-row>
      <v-row class="mt-n6">
        <v-col cols="12" sm="3"></v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            required
            class="centrar"
            rounded
            outlined
            placeholder="telefono"
            text-xs-right
            color="#FFDF6E"
            v-model="cliente.tel"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3"></v-col>
      </v-row>
      <v-row fluid>
        <v-col cols="12" sm="5"></v-col>
        <v-col cols="12" sm="2">
          <v-btn
            x-large
            rounded
            type="submit"
            class="mt-8 textoTitulo4"
            color="#FFDF6E"
            >CONTINUAR</v-btn
          >
        </v-col>
        <v-col cols="12" sm="5"></v-col>
      </v-row>
    </form>
    <div class="text-center">
      <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import { BASE_URL, ENDPOINTS } from "../constants";

export default {
  name: "Contacto",
  data() {
    return {
      cliente: {
        email: "",
        tel: "",
        instagram: "",
      },
      id_cliente: "",
      bandera1: false,
      overlay: false,
    };
  },
  methods: {
    RegistrarContacto() {
      const url = BASE_URL + ENDPOINTS.CLIENTS.BASE;
      setTimeout(() => (this.bandera1 = false), 5000);
      this.overlay = !this.overlay;
      axios.post(url, this.cliente).then(
        (response) => {
          console.log(response.data.valor._id);
          this.id_cliente = response.data.valor._id;
          this.$store.dispatch("set_idCliente", this.id_cliente);
          console.log("Cliente desde store", this.$store.state.cliente_id);
        },
        (error) => {
          console.log(error);
        }
      );
      setTimeout(() => this.$router.push({ path: "/token" }), 500);
    },
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 3000);
    },
  },
};
</script>
