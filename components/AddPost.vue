<template>
  <form @submit="submit">
    <fieldset class="without-border-bottom without-border-radius-bottom white">
      <textarea v-model="description" class="form-control border-none" placeholder="Escribe aquí tu estado" />
    </fieldset>
    <fieldset v-if="description.trim().length > 0" class="without-border-top without-border-radius-top white">
      <button class="btn btn-primary" type="submit">
        Publicar
      </button>
    </fieldset>
  </form>
</template>

<script>
import firebaseHelper from '../helpers/firebaseHelper';

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
        user: await firebaseHelper.getUserOnSesion(),
        comments: {
          0: 0
        },
        reactions: {
          0: 0
        }
      };
      await firebaseHelper.addPost(newPost);
      this.description = '';
      this.$emit('successfulPost');
      this.$toast.success('Publicación realizada con éxito.');
    }
  }
};
</script>
