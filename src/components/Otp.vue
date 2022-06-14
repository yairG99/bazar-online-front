<template>
    <v-container fluid>
     <v-row  class="mt-10" >
        <v-col cols="12" sm="5"></v-col>
        <v-col cols="12" sm="6">
            <span class="TextoTitulo10 negroTitulo ml-n7">TOKEN</span>
        </v-col>
        <v-col cols="12" sm="1">
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
                v-model="otp"
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
    <v-row fluid>
        <v-col cols="12" sm="5"></v-col>
        <v-col cols="12" sm="2" class="ml-10">
            <v-btn x-large rounded class="mt-8 textoTitulo4 " v-on:click="Login"  color="#FFDF6E">CONTINUAR</v-btn>
        </v-col> 
        <v-col cols="12" sm="3"></v-col>
    </v-row> 
    </v-container>
</template>

<script>
    import axios from "axios";
    export default{ 
        name: 'Otp',
        data: () => ({
            otp: '',
            token: '',
            bandera1: false,
        }),
        methods: {
            Login() {
                console.log("Log : ", this.otp);
                const ruta = 'https://bazar-online-back.herokuapp.com/api/vtoken/login'
                axios.post(ruta, { token: this.otp })
                    .then((response) => {
                        this.token = response.data.token;

                    }, (error) => {
                        console.log(error);

                    });
                    this.overlay = !this.overlay
            },
        },
        computed: {
            labels(){
                return this.token;
            }
        },
        watch: {
            token: {
                handler:function(value) {
                setTimeout(() => this.bandera1 = true, 5000); 
                const ruta = 'https://bazar-online-back.herokuapp.com/api/vtoken/posts/' + this.$store.state.cliente_id
                const sAuth = `Bearer ${value}`
                axios.post(ruta, {},
                {
                    headers: {
                        'Authorization': sAuth
                    }
                })
               .then((res) => {
                    this.$store.dispatch("set_Auth", res.data.valor.verificado);
                    this.$store.dispatch("set_Bandera", false);
                })
                .catch((error) => {
                     console.error(error)
                     console.log("1. ", this.$store.state.bandera)
                     this.$store.dispatch("set_Auth", false);
                     this.$store.dispatch("set_Bandera", true);
                     console.log("2. ", this.$store.state.bandera)
                });
                this.$router.push({path:'/orden'})
                },                
            }
        }
    };
</script>