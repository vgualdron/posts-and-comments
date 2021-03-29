<template>
  <nav v-if="user && user.email" class="nav-information">
    <ul>
      <li class="welcome">
        <a href="#">Hola, {{ user.email }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
  },
  computed: {
    user () {
      return this.$store.getters.user;
    }
  },
  data () {
    return {
    };
  },
  created () {
  },
  methods: {
  }
};
</script>
