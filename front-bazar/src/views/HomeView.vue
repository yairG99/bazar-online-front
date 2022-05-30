<template>
  <v-container fluid>

        <v-row>
          <v-col cols="12" sm="11">
          </v-col>
          <v-col cols="12" sm="1">
            <v-btn fab x-large fixed class="botonBag" to="/bag" >
            <v-img
              contain
              max-height="40"
              src="../assets/IconoBag.png"
            ></v-img>
            </v-btn>
          </v-col>
        </v-row>
        
        <v-row>
          <Gallery />
        </v-row>

        <v-row fluid>
          <v-footer>
            <Footer />
          </v-footer>
        </v-row>
  </v-container>
</template>

<script>
  import Gallery from '../components/Gallery'
  import Footer from '../components/Footer'

  export default {
    name: 'Home',

    components: {
      Gallery,
      Footer
    },
  };
</script>
