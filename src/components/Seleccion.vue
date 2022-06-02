<template>
    <v-container fluid>
            <v-sheet
        class="mx-auto"
        elevation="8"
        max-width="1300"
        >
        <v-slide-group
        v-model="model"
        class="pa-4"
        show-arrows
        >
        <v-slide-item
            v-for="n in 15"
            :key="n"
            v-slot="{ active, toggle }"
        >
            <v-card
            :color="active ? '#FFDF6E' : 'white'"
            border-color="#FFDF6E"
            class="ma-4 rounded-xl"
            height="200"
            width="300"
            @click="toggle"
            >
            <v-row
                class="fill-height"
                align="center"
                justify="center"
            >
                <v-scale-transition>
            
                </v-scale-transition>
                
                <v-card-text class="textoBasic6" >
                    Cancha del árbol
                    <br>
                    6 pm - 8 pm
                    <br>
                    Martes 21 de Mayo
                </v-card-text>

            </v-row>
            </v-card>
        </v-slide-item>
        </v-slide-group>

        <v-expand-transition>
        <v-sheet
            v-if="model != null"
            height="100"
            tile
        >
            <v-row
            class="fill-height"
            align="center"
            justify="center"
            >
             <v-btn flat x-large rounded class=" textoTitulo4" to="/contacto" color="#FFDF6E" >CONFIRMAR</v-btn>
            </v-row>
        </v-sheet>
        </v-expand-transition>
    </v-sheet>
    </v-container>
</template>

<script>
    export default{
        name: 'Seleccion',

        data: () => ({
            model: null,
        }),

        components: {

        },
    };
</script>