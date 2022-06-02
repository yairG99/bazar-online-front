<template>
    <v-container fluid>
     <v-row  class="mt-10" >
        <v-col cols="12" sm="5"></v-col>
        <v-col cols="12" sm="6">
            <span class="TextoTitulo10 negroTitulo ml-n7">TOKEN</span>
        </v-col>
        <v-col cols="12" sm="1">
            <v-btn x-large fab color="#FFDF6E" to="/contacto" >
                <v-icon x-large>mdi-arrow-left</v-icon>
            </v-btn>
        </v-col>
    </v-row>
    <v-row>

        <v-col cols="12" sm="3"></v-col>
            <v-col cols="12" sm="6" class="textoBasic31">
                    Te pasamos un token a tu correo, ayudanos a ponerlo aquí para poder mandarte el recibo de tu orden
            </v-col>
        <v-col cols="12" sm="3"></v-col>   
    </v-row>
    <v-row class="mt-10" >
        <v-col cols="12" sm="4"></v-col>
        <v-col cols="12" sm="3" class="ml-16">
                <v-otp-input
                class="outlined"
                length="6"
                ></v-otp-input>
        </v-col>
        <v-col cols="12" sm="5"></v-col>   
        
    </v-row>

    <v-row>
        <v-col cols="12" sm="3"></v-col>
            <v-col cols="12" sm="6" class="textoBasic32">
                    Psss, no aparecio?, mandalo de nuevo:(
            </v-col>
        <v-col cols="12" sm="3"></v-col> 
    </v-row>
        
    </v-container>
</template>

<script>
    export default{
        name: 'Otp',

        components: {

        },
    };
</script>