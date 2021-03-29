<template>
  <header class="navbar">
    <h1>
      <img src="../assets/images/logo-header.png" />
      <div v-if="user && user.email" class="dropdown">
        <ImageProfile :size="sizeImage" />
        <div class="dropdown-content">
          <button class="signout btn btn-outline-primary" @click="logout">Cerrar sesión</button>
        </div>
      </div>
    </h1>
  </header>
</template>

<script>
import configHelper from '../helpers/configHelper';
import ImageProfile from '~/components/ImageProfile.vue';

export default {
  name: 'Header',
  components: {
    ImageProfile
  },
  props: {
  },
  computed: {
    user () {
      return this.$store.getters.user;
    }
  },
  data () {
    return {
      appName: configHelper.appName,
      sizeImage: 'md'
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
