<template>
  <form @submit="submit" class="form-login">
    <fieldset>
      <legend>Iniciar Sesión</legend>
      <input class="form-control" v-model="email" type="email" placeholder="Escriba el correo">
      <input class="form-control" v-model="password" type="password"  placeholder="Escriba la contraseña">
      <button type="submit" class="btn btn-primary">Iniciar sesión</button>
      <button @click="goRegister"  class="btn btn-outline-primary">Ir a crear cuenta</button>
    </fieldset>
  </form>
</template>

<script>
import { isEmptyString } from '../util/string-utils';

export default {
  name: 'Login',
  props: {

  },
  data () {
    return {
      email: '',
      password: ''
    };
  },
  mounted () {
  },
  methods: {
    async submit (event) {
      event.preventDefault();
      if (isEmptyString(this.email)) {
        this.$toast.error('El campo email es obligatorio.');
        return false;
      }
      if (isEmptyString(this.password)) {
        this.$toast.error('El campo email es obligatorio.');
        return false;
      }
      const email = this.email;
      const password = this.password;
      const payload = {
        email,
        password
      };
      await this.$store.dispatch('login', payload)
        .then((resp) => {
          this.$toast.success('Sesión iniciada con éxito.');
          this.$router.push('/');
        }).catch((err) => {
          if (err.message) {
            this.$toast.error('Error al iniciar sesión. ' + err.message);
          } else {
            this.$toast.error('Error al iniciar sesión. Intente más tarde por favor.');
          }
        });
    },
    goRegister (event) {
      event.preventDefault();
      this.$router.push({ path: '/register' });
    }
  }
};
</script>
