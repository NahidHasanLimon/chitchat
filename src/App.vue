<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
      dark
    >
      <v-btn text to="/"> Messages </v-btn>
      <v-btn text to="/newmessages"> New Messages </v-btn>
      <v-spacer></v-spacer>
      <v-btn v-if="!$store.state.token" text to="/register"> Register </v-btn>
      <v-btn v-if="!$store.state.token" text to="/login"> Login </v-btn>
      <v-btn v-if="$store.state.token" @click="$store.commit('logout')" text> Logout </v-btn>
    </v-app-bar>

    <v-main>
      <br>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Messages from './components/Messages';
import NewMessage from './components/NewMessage';

export default {
  name: 'App',

  components: {
    Messages,
    NewMessage,
  },

  data: () => ({
   
  }),
};
</script>
