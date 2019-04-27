<template>
  <v-ons-page id="splash">
    <h1>Aqui é o splash</h1>
  </v-ons-page>
</template>

<script>
  //import Api from '../services/api.js'
  import { mapMutations } from 'vuex';
  import Chat from './Chat.vue';

  export default {
    name: 'splash',
    methods: {
      ...mapMutations([
        'push'
      ])
    },
    mounted: function () {
      setTimeout(() => {
        this.push(Chat);
      }, 3000);
      // Essa é outra forma de dar push
      // this.push(() => import('./Chat.vue'));
    }
  }
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
