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
                        New Message
                    </v-toolbar-title>
                </v-toolbar>
                    <v-text-field
                    v-model="messageBody"
                    label="Messages"
                    required
                ></v-text-field>
            <v-btn @click="submit"> Submit </v-btn>
            
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
                messageBody: " "
             };
         },

         methods:{
             async submit(){
                //  console.log(this.messageBody);
              
               try {
                   
                    this.$store.dispatch('newMessage',this.messageBody);
               } catch (error) {
                   console.log(error);
               }
             },
         }
        
     }
</script>