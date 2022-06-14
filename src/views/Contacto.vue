<template>
  <v-container>
    <form @submit.prevent="registracontacto(cliente)">
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
          flat
          x-large
          rounded
          type="submit"
          class="mt-8 textoTitulo4"
          color="#FFDF6E"
          >CONTINUAR</v-btn>
      </v-col>
      <v-col cols="12" sm="5"></v-col>
    </v-row>
    </form>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "Contacto",
  data() {
    return {
      cliente:{
        email:"",
        tel:"",
        instagram:""
      }
    }
  },
  methods:{
        ...mapActions(['registracontacto'])
  },
  computed: {
  },
};
</script>
