<template>
  <div v-if="posts && posts.length > 0">
    <Post v-for="(post, key) in posts" :key="key" :post="post" />
  </div>
</template>

<script>
import Post from '~/components/Post.vue';
export default {
  name: 'GridPosts',
  components: {
    Post
  },
  props: {
    posts: {
      type: Array,
      require: true
    }
  },
  data () {
    return {
    };
  },
  mounted () {
  },
  methods: {

  }
};
</script>
