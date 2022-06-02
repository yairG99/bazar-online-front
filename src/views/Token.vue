<template>
<v-app class="colores2">
<v-container fluid >
   <Otp/>

    <v-row fluid>
        <v-col cols="12" sm="5"></v-col>
        <v-col cols="12" sm="2" class="ml-10">
            <v-btn flat x-large rounded class="mt-8 textoTitulo4 " to="/orden" color="#FFDF6E">CONTINUAR</v-btn>
        </v-col> 
        <v-col cols="12" sm="3"></v-col>
    </v-row>

</v-container>
</v-app>
</template>

<script>

    import Otp from '../components/Otp.vue'
    export default{
        name: 'Token',

        components: {
    Otp,
    Otp
},
    };
</script>