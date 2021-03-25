<template>
  <form @submit="submit">
    <textarea name="textarea" rows="1" cols="50">Write something here</textarea>
    <button type="submit">
      Comentar
    </button>
  </form>
</template>

<script>
export default {
  name: 'AddComment',
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
    submit: (event) => {
      event.preventDefault();
      console.log('agregar comentario');
    }

  }
};
</script>
