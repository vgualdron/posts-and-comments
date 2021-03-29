<template>
  <form class="add-comment" @submit="submit">
    <fieldset class="without-border-bottom without-border-radius-bottom white">
      <textarea 
        v-model="description" 
        ref="textareaAddComment" 
        class="form-control border-none secondary" 
        placeholder="Escribe aquí tu comentario" 
        @input="$event.target.composing = false" 
      />
    </fieldset>
    <fieldset v-if="description.trim().length > 0" class="without-border-top without-border-radius-top white">
      <button class="btn btn-primary" type="submit">Comentar</button>
    </fieldset>
  </form>
</template>

<script>
import firebaseHelper from '../helpers/firebaseHelper';

export default {
  name: 'AddComment',
  props: {
    post: {
      type: Object,
      require: true
    }
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
        this.$toast.error('Debes escribir un comentario para poder realizar la publicación.');
      }
      const newComment = {
        description: this.description,
        date: new Date().getTime(),
        user: await firebaseHelper.getUserOnSesion()
      };
      await firebaseHelper.addComment(newComment, this.post.id);
      this.description = '';
      this.$toast.success('Comentario realizado con éxito.');
    }
  }
};
</script>
