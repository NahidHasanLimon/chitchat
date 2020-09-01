 import Vue from 'vue';
 import Vuex from 'vuex';
 import axios from 'axios';
 Vue.use(Vuex);
 
 export default  new Vuex.Store({
     /* eslint-disable vue/no-unused-components */
    state:{
        messages: []
    },
    mutations:{
        updateMessages(state,messages){
            state.messages = messages;
        },
        newMessage(state,message){
            state.messages.push(message);
        }
    },
    actions: {
        async getMessages({commit}){
            let messages=(await axios.get('http://localhost:3000/messages')).data
            commit('updateMessages',messages);
        },
        async newMessage({commit},messageBody){
            let msg =( await axios.post("http://localhost:3000/messages",
            {
                message: messageBody
                })).data;
                // axios.defaults.headers.common['Authorization']== user.id;
            commit('newMessage',msg.message);
        },
        async register({commit},registerData){
          let user=  (await axios.post("http://localhost:3000/register",registerData )).data;
          console.log(user);
          console.log(user.id);
          localStorage.setItem("token",user.id);
          axios.defaults.headers.common['Authorization']= user.id;
           
        },
      
        async getSingleMessage({commit},id){
            return axios.get(`http://localhost:3000/singlemessage/${id}`)
           
        },
        
    }
 })