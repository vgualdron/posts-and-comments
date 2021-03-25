<template>
  <header class="navbar">
    <h1>{{ appName }}</h1>
  </header>
</template>

<script>
import envConfig from '../helpers/config';
export default {
  name: 'Header',
  props: {

  },
  data () {
    return {
      appName: envConfig.appName
    };
  },
  created () {
  },
  methods: {
  }
};
</script>
