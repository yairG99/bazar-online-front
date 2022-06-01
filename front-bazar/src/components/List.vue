<template>
<v-card min-height="400" min-width="750" outlined color="transparent">
            <v-row  v-for="item in items"
                        :key="item.id" 
                        class="mt-10">  
                <v-col cols="12" sm="1"></v-col>     
                <v-col cols="12" sm="2" >
                        <v-img :src="item.src" max-height="750" max-width="750" class="grey lighten-2 imagenAspecto2" >
                        </v-img>
                </v-col>
                <v-col cols="12" sm="8" class="ml-5">
                    <v-row class="textoSemi mt-7">
                        {{item.title}}
                    </v-row>
                    <v-row class="textoBasic mt-6">
                        <v-col cols="12" sm="6">
                            Talla: {{item.talla}}
                        </v-col>
                        <v-col cols="12" sm="6">
                            Precio: ${{item.precio}}
                        </v-col>
                    </v-row>    
                    
                </v-col>
                
            </v-row>
        </v-card>
</template>

<script>

export default {
    name:'List',

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
};
</script>