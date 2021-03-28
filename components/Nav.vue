<template>
  <nav class="nav-information" v-if="user && user.email">
    <ul>
      <li class="signout">
        <button class="signout btn btn-outline-primary" @click="logout">Cerrar sesión</button>
      </li>
    </ul>
    <ul>
      <li class="welcome">
        <a href="#">Bienvenido, {{ user.email }}</a>
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
