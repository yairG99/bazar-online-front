<template>
    <v-card min-width="350" fluid class="ml-n16 mt-16">
        <v-row>
            <v-card-text class="textoTitulo3 mt-5">
                Pago Final: 
            </v-card-text>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6">
                <v-card-text class="textoBasic2">
                    Valor del pedido: 
                </v-card-text>
            </v-col>
            <v-col cols="12" sm="6">
                <v-card-text class="textoBasic3">
                     $120.00
                </v-card-text>
            </v-col>
        </v-row>
        <v-row class="mt-n10 mb-5">
            <v-col cols="12" sm="8">
                <v-card-text class="textoBasic2">
                    Envío y Plataforma: 
                </v-card-text>
            </v-col>
            <v-col cols="12" sm="4">
                <v-card-text class="textoBasic3">
                     $10.00
                </v-card-text>
            </v-col>
        </v-row>
        <v-card outlined>
            <v-card-text class="textoBasic4">
                Total: $130
            </v-card-text>
        </v-card>
    </v-card>
</template>


<script>
    export default{
        name: 'Recibo',
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