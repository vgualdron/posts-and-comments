<template>
  <nav class="nav-information" v-if="user">
    <a class="welcome" href="#">Bienvenido, {{ user.email }}</a>
    <button class="signout btn btn-outline-primary" @click="logout">Cerrar sesión</button>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {

  },
  computed: {
    user () {
      return JSON.parse(this.$store.getters.user);
    }
  },
  data () {
    return {
    };
  },
  created () {
  },
  methods: {
    async logout () {
      await this.$store.dispatch('logout')
        .then((resp) => {
          this.$toast.success('Sesión cerrada con éxito.');
          this.$router.push('/login');
        }).catch((err) => {
          if (err.message) {
            this.$toast.error('Error al cerrar sesión. ' + err.message);
          } else {
            this.$toast.error('Error al cerrar sesión. Intente más tarde por favor.');
          }
        });
    }
  }
};
</script>
