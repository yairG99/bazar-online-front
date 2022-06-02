<template>
<v-container>
    <v-row class="mt-10">
        <v-col cols="12" sm="10">
            <v-row>
                    <span class="TextoTitulo amarilloTitulo">Cómo te</span>
                </v-row>
                <v-row>
                    <span class="TextoTitulo amarilloTitulo mt-n9">contactamos?</span>
                </v-row>
        </v-col>
        <v-col cols="12" sm="2">
            <v-btn x-large fab dark to="/checkout" >
                <v-icon x-large>mdi-arrow-left</v-icon>
            </v-btn>
        </v-col>
    </v-row>
    <v-row class=" mt-16">
        <v-col cols="12" sm="3"></v-col>
        <v-col cols="12" sm="6">
            <v-text-field rounded outlined class="centrar" placeholder="email" color="#FFDF6E"  ></v-text-field>
        </v-col> 
        <v-col cols="12" sm="3"></v-col>
    </v-row>
    <v-row class=" mt-n6">
        <v-col cols="12" sm="3"></v-col>
        <v-col cols="12" sm="6">
            <v-text-field class="centrar" rounded outlined placeholder="@ de instagram"  color="#FFDF6E"  ></v-text-field>
        </v-col> 
        <v-col cols="12" sm="3"></v-col>
    </v-row>
    <v-row class=" mt-n6">
        <v-col cols="12" sm="3"></v-col>
        <v-col cols="12" sm="6">
            <v-text-field  class="centrar" rounded outlined placeholder="telefono" text-xs-right color="#FFDF6E"  ></v-text-field>
        </v-col> 
        <v-col cols="12" sm="3"></v-col>
    </v-row>
    <v-row fluid>
        <v-col cols="12" sm="5"></v-col>
        <v-col cols="12" sm="2">
            <v-btn flat x-large rounded class="mt-8 textoTitulo4 " to="/token" color="#FFDF6E">CONTINUAR</v-btn>
        </v-col> 
        <v-col cols="12" sm="5"></v-col>
    </v-row>
</v-container>
</template>



<script>
export default{
        name: 'Contacto',
    };
</script>