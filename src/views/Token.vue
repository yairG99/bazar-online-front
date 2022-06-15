<template>
<v-app class="colores2">
<v-container fluid >
   <Otp/>
   <TokenInvalido/>
</v-container>
</v-app>
</template>

<script>

    import Otp from '../components/Otp.vue'
    import TokenInvalido from '../components/TokenInvalido.vue'
    export default{
        name: 'Token',

        components: {
    Otp,
    TokenInvalido
},
    };
</script>