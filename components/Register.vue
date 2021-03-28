<template>
  <form @submit="submit" class="form-register">
    <fieldset>
      <legend>Registrarse</legend>
      <input class="form-control" v-model="email" type="email" placeholder="Escriba el correo">
      <input class="form-control" v-model="password" type="password"  placeholder="Escriba la contraseña">
      <button type="submit" class="btn btn-primary">Registrarse</button>
      <button @click="goLogin"  class="btn btn-outline-primary">Ir a iniciar sesión</button>
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
