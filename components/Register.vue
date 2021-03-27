<template>
  <form @submit="submit">
    <fieldset>
      <legend>Registrarse</legend>
      <input v-model="email" type="email">
      <input v-model="password" type="password">
      <button type="submit">Crear cuenta</button>
      <button @click="goLogin">Ir a iniciar sesión</button>
    </fieldset>
  </form>
</template>

<script>

export default {
  name: 'Register',
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
            this.$toast.error('Error al crear crea. ' + err.message);
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
