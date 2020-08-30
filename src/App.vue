<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
      dark
    >
      <v-btn flat> Messages </v-btn>
      <v-spacer></v-spacer>
      <v-btn flat> Login </v-btn>
    </v-app-bar>

    <v-main>
      <NewMessage/>
      <Messages/>
    </v-main>
  </v-app>
</template>

<script>
import Messages from './components/Messages';
import NewMessage from './components/NewMessage';

export default {
  name: 'App',

  components: {
    Messages,
    NewMessage,
  },

  data: () => ({
    //
  }),
};
</script>
