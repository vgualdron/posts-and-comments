<template>
  <form @submit="submit">
    <textarea name="textarea" rows="2" cols="50" v-model="description">Write something here</textarea>
    <button type="submit">Publicar</button>
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
      const newPost = {
        description: this.description,
        date: new Date().toString()
      };
      await firebase.add(newPost);
      this.description = '';
      this.$emit('successfulPost');
    }
  }
};
</script>
