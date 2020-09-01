<template>
    <v-flex sm8 offset-sm2>
        <v-card>
        <v-toolbar >
            <v-toolbar-title>
                Messages
            </v-toolbar-title>
        </v-toolbar>
        <v-list>
            <v-list-item
                v-for="(message,index) in $store.state.messages"
                :key="message"
                :to="'singlemessage/'+index"
               
            >
                <!-- <v-list-item-icon>
                <v-icon v-if="item.icon" color="pink">mdi-star</v-icon>
                </v-list-item-icon> -->

                <v-list-item-content>
                <v-list-item-title v-text="message.text"></v-list-item-title>
                <v-list-item-sub-title v-text="message.user">posted by </v-list-item-sub-title>
                </v-list-item-content>

                <!-- <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar> -->
            </v-list-item>
            </v-list>
        </v-card>
    </v-flex>
</template> 
<script>
    // import axios from 'axios';
  
     export default {
         async created() {
             console.log('created');
            //  let messages=(await axios.get('http://localhost:3000/messages')).data ;
            //  this.$store.commit('updateMessages',messages);
            this.$store.dispatch('getMessages');
         }
        
     }
</script>