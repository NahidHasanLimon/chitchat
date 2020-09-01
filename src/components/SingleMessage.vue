<template>


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
                        Message
                    </v-toolbar-title>
                </v-toolbar>
                 <v-card-text>
                     {{message.text}}
                 </v-card-text>
                 <v-card-text>
                     posted by :{{message.user}}
                 </v-card-text>
            
            </v-col>
            
            </v-row>
        </v-col>
        </v-row>
        </v-card>
   </v-container> 

</template> 
<script>
    // import axios from 'axios';
  
     export default {
         data(){
             return {
                message: " "
             };
         },
         async created () {
            //  console.log(this.$route.params.id);
             let id=this.$route.params.id;
             console.log(id);
             this.message = (await this.$store.dispatch('getSingleMessage', id)).data

         },

       
        
     }
</script>