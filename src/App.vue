<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
      dark
    >
      
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
