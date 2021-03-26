<template>
  <form @submit="submit">
    <fieldset class="without-border-bottom without-border-radius-bottom white">
      <textarea class="form-control border-none" v-model="description" placeholder="Escribe aquí tu estado">
      </textarea>
    </fieldset>
    <fieldset class="without-border-top without-border-radius-top white">
      <button :disabled="this.description.trim().length <= 0" class="btn btn-primary" type="submit">Publicar</button>
    </fieldset>
  </form>
</template>

<script>
import firebase from '../helpers/firebase';

export default {
  name: 'AddPosts',
  props: {
  },
  data () {
    return {
      description: ''
    };
  },
  mounted () {
  },
  methods: {
    async submit (event) {
      event.preventDefault();
      if (this.description.trim().length <= 0) {
        this.$toast.error('Debes escribir un estado para poder realizar la publicación.');
      }
      const newPost = {
        description: this.description,
        date: new Date().getTime(),
        user: await firebase.getUserOnSesion()
      };
      await firebase.add(newPost);
      this.description = '';
      this.$emit('successfulPost');
      this.$toast.success('Publicación realizada con éxito.');
    }
  }
};
</script>
