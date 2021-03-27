<template>
  <header class="navbar">
    <h1>{{ appName }}</h1>
  </header>
</template>

<script>
import configHelper from '../helpers/configHelper';
export default {
  name: 'Header',
  props: {

  },
  data () {
    return {
      appName: configHelper.appName
    };
  },
  created () {
  },
  methods: {
  }
};
</script>
