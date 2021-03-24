<template>
  <form @submit="onSubmit">
    <input v-model="user">
    <input v-model="password">
    <button type="submit">Submit this form</button>
  </form>
</template>

<script>
export default {
  name: 'FormRegister',
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

  }
};
</script>
