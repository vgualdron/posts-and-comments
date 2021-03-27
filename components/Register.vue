<template>
  <form @submit="submit">
    <input v-model="user" type="email">
    <input v-model="password" type="password">
    <button type="submit">Crear cuenta</button>
    <button @click="goLogin">Ir a iniciar sesión</button>
  </form>
</template>

<script>
import firebaseHelper from '../helpers/firebaseHelper';

export default {
  name: 'Register',
  props: {

  },
  data () {
    return {
      user: '',
      password: ''
    };
  },
  mounted () {
  },
  methods: {
    async submit (event) {
      event.preventDefault();
      const resp = await firebaseHelper.createUser(this.user, this.password);
      if (resp.user) {
        this.$toast.success('Cuenta creada con éxito.');
        const result = await firebaseHelper.login(this.user, this.password);
        if (result.user) {
          this.$toast.success('Sesión iniciada con éxito.');
          this.$router.push({ path: '/' });
        } else if (result.message) {
          this.$toast.error('Error al crear la cuenta. ' + result.message);
        } else {
          this.$toast.error('Error al iniciar sesión con la cuenta creada. Intente más tarde por favor.');
        }
      } else if (resp.message) {
        this.$toast.error('Error al crear la cuenta. ' + resp.message);
      } else {
        this.$toast.error('Error al crear la cuenta. Intente más tarde por favor.');
      }
    },
    goLogin (event) {
      event.preventDefault();
      this.$router.push({ path: '/login' });
    }
  }
};
</script>
