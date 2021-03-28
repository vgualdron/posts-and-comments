<template>
  <form @submit="submit" class="form-register">
    <fieldset>
      <legend>Registrarse</legend>
      <input class="form-control" v-model="email" type="email" placeholder="Escriba el correo">
      <input class="form-control" v-model="password" type="password" placeholder="Escriba la contraseña">
      <input class="form-control" v-model="passwordConfirm" type="password" placeholder="Vuelve a escribir la contraseña">
      <button type="submit" class="btn btn-primary">Registrarse</button>
      <button @click="goLogin"  class="btn btn-outline-primary">Ir a iniciar sesión</button>
    </fieldset>
  </form>
</template>

<script>
import { isEmptyString } from '../util/string-utils';

export default {
  name: 'Register',
  props: {

  },
  data () {
    return {
      email: '',
      password: '',
      passwordConfirm: ''
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
      if (this.password !== this.passwordConfirm) {
        this.$toast.error('Los valores de los campos de contraseña no coinciden.');
        return false;
      }
      const email = this.email;
      const password = this.password;
      const payload = {
        email,
        password
      };
      let flag = false;
      await this.$store.dispatch('register', payload)
        .then((resp) => {
          flag = true;
          this.$toast.success('Cuenta creada con éxito.');
        }).catch((err) => {
          if (err.message) {
            this.$toast.error('Error al crear cuenta. ' + err.message);
          } else {
            this.$toast.error('Error al iniciar sesión. Intente más tarde por favor.');
          }
        });

      if (flag) {
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
      }
    },
    goLogin (event) {
      event.preventDefault();
      this.$router.push({ path: '/login' });
    }
  }
};
</script>
