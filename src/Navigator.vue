<template>
  <v-ons-navigator
    swipeable
    :page-stack="stack"
    :options="options"
  ></v-ons-navigator>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'navigator',
    computed: {
      ...mapState({
        stack: state => state.navigator.stack,
        options: state => state.navigator.options
      })
    }
  }
</script>

<style>

</style>
