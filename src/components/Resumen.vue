<template>
    <v-card min-width="350" fluid class="ml-n16 mt-16">
        <v-row>
            <v-card-text class="textoTitulo34 mt-5">
                Resumen: 
            </v-card-text>
        </v-row>
        <v-row>
                <v-card-text class=" ml-4 mb-n2 textoBasic">
                    Te esperamos en: 
                    <v-spacer class="textoBasic11">
                    Cancha del Árbol
                    el Martes 31 de Mayo de 10:00 am a 12:00 pm. 
                    </v-spacer>
                </v-card-text>
        </v-row>
        <v-row class=" mb-5">
                <v-card-text class="ml-4 mb-n8 textoBasic">
                    Ahí te cobraremos:
                    <v-spacer class="textoBasic11">
                    175.00 pesitos 
                    </v-spacer>
                </v-card-text>
        </v-row>

        <v-row class=" mb-5">
                <v-card-text class="ml-4 textoBasic">
                    Muchas gracias por 
                    comprar con nosotros:)
                </v-card-text>
        </v-row>
    </v-card>
</template>


<script>
    export default{
        name: 'Resumen',
        data: () => {
            return {
                items: [
                    {
                        id:1,
                        src: require("../assets/img-producto/img4.jpg"),
                        title: 'Sueter Blanco Encaje',
                        talla: 'M',
                        precio: '120'
                    },
                    {
                        id:2,
                        src: require("../assets/img-producto/img1.jpg") ,
                        title: 'Gorra Zara',
                        talla: 'CH',
                        precio: '90'

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
                        src: require("../assets/img-producto/img2.jpg"),
                        title: 'Blusa bordada flores',
                        talla: 'CH',
                        precio: '120'
                    },
                ] 
            };
        },

        components: {

        },
    };
</script>