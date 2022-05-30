<template>
    <v-container>
      <v-row>
        <v-col
          v-for="item in items"
          :key="item.id"
          class="d-flex child-flex menosMargen imagenesDual"
          cols="4"
        >
        <v-card flat outlined class="acomodo">
          <v-img
            :src="item.src"
            aspect-ratio="1"
            class="grey lighten-2 imagenAspecto "
          >
            <v-btn text fab class="botonAgregar">
                <v-img 
                contain
                max-height="50"
                max-width="50" 
                src="../assets/BagAdd.png">
                </v-img> 
              </v-btn>

              <Carrucel />

              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >

                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
          </v-img>  
           <v-card-text class="text--primary" id="Texto">
            <div>{{item.title}}</div>
            <div>Talla:{{item.talla}}</div>
            <div>${{item.precio}}</div>
          </v-card-text>    
        </v-card>

        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import Carrucel from "./Carrucel.vue";

  export default {
    name: 'Gallery',

    data: () => {
      return {
         items: [
            {
                id:1,
                src: require("../assets/img-producto/img1.jpg") ,
                title: 'Gorra Zara',
                talla: 'CH',
                precio: '90'

            },
            {
                id:2,
                src: require("../assets/img-producto/img2.jpg"),
                title: 'Blusa bordada flores',
                talla: 'CH',
                precio: '120'
            },
            {
                id:3,
                src: require("../assets/img-producto/img3.jpg"),
                title: 'Gorrito Chilo',
                talla: 'All',
                precio: '80' 
            },
            {
                id:4,
                src: require("../assets/img-producto/img4.jpg"),
                title: 'Sueter Blanco Encaje',
                talla: 'M',
                precio: '120' 
            },
            {
                id:5,
                src: require("../assets/img-producto/img5.jpg"),
                title: 'Abrigo Detective',
                talla: 'G',
                precio: '220' 
            },

         ] 
      };
    },
    components: {
    Carrucel,
},
  };
</script>