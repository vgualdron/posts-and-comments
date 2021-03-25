<template>
  <form @submit="submit">
    <textarea name="textarea" rows="2" cols="50" v-model="description">Write something here</textarea>
    <button type="submit">Publicar</button>
  </form>
</template>

<script>
export default {
  name: 'add-posts',
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
    submit (event) {
      event.preventDefault();
      const newPost = {
        description: this.description
      };
      this.$emit('successfulPost', newPost);
    }
  }
};
</script>
