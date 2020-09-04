<template>

<v-form >
    <v-container fluid>
        <v-card>
            
        <v-row>
        <v-col cols="12">
            <v-row justify="center">
                
            <v-col
                cols="9"
                md="3"
            >
                <v-toolbar >
                    <v-toolbar-title>
                        Login
                    </v-toolbar-title>
                </v-toolbar>
                    <v-text-field
                    v-model="userName"
                    label="userName"
                    required
                ></v-text-field>
                    <v-text-field
                    v-model="password"
                    label="password"
                    required
                ></v-text-field>
            <v-btn @click="login"> Login </v-btn>
            
            </v-col>
            
            </v-row>
        </v-col>
        </v-row>
        </v-card>
   </v-container> 
  </v-form>
</template> 
<script>
    // import axios from 'axios';
  
     export default {
         data(){
             return {
                userName: " ",
                password: " ",
             };
         },

         methods:{
             async login(){
                //  console.log(this.messageBody);
              
               try {
                   
                    this.$store.dispatch('login',{userName: this.userName, password: this.password});
               } catch (error) {
                   console.log(error);
               }
             },
         }
        
     }
</script>