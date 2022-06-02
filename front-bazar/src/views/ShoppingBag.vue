<template>
<v-container class="mb-16" >
    <v-row class="mt-10" fluid>
        <v-col cols="12" sm="10">
            <span class="TextoTitulo amarilloTitulo">Tú cesta</span>
        </v-col>
        <v-col cols="12" sm="2" >
            <v-btn x-large fab dark to="/" >
                <v-icon x-large>mdi-arrow-left</v-icon>
            </v-btn>
        </v-col>
    </v-row>
    <v-row class="mt-10">
        <v-col cols="12" sm="10">
            <List/>
        </v-col>
        <v-col cols="12" sm="2" >
           <v-row>
              <Recibo/> 
           </v-row>
           <v-row>
               <v-col cols="12" sm="2"></v-col>
               
               <v-col cols="12" sm="2">
                   <v-btn flat x-large rounded class="mt-8 textoTitulo4 " to="/checkout" color="#FFDF6E" >CHECK OUT</v-btn>
               </v-col>
               <v-col cols="12" sm="5"></v-col>
           </v-row>
        </v-col>
    </v-row>
</v-container>
</template>

<script>

    import List from '../components/List.vue'
    import Recibo from '@/components/Recibo.vue';

    export default{
            name: 'ShoppingBag',

        components: {
            List,
            Recibo
        } 
    };
</script>