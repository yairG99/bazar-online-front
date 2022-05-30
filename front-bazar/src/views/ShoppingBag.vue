<template>
<v-container class="mb-16">
    <v-row class="mt-10">
        <v-col cols="12" sm="10">
            <span class="TextoTitulo amarilloTitulo">Tú cesta</span>
        </v-col>
        <v-col cols="12" sm="2">
            <v-btn x-large fab dark to="/" >
                <v-icon x-large>mdi-arrow-left</v-icon>
            </v-btn>
        </v-col>
    </v-row>
    <v-row class="mt-10">
        <List/>
    </v-row>
</v-container>
</template>

<script>

    import List from '../components/List.vue'

    export default{
            name: 'ShoppingBag',
            
        components: {
            List,
        } 
    };
</script>