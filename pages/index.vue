<template>
  <div class="container">
    <VHeader />
    <VNav />
    <AddPost @successfulPost="setPost" />
    <GridPosts :posts="posts" />
    <VFooter />
  </div>
</template>

<script>
import VHeader from '~/components/VHeader.vue';
import VNav from '~/components/VNav.vue';
import GridPosts from '~/components/GridPosts.vue';
import AddPost from '~/components/AddPost.vue';
import VFooter from '~/components/VFooter.vue';

export default {
  name: 'Inicio',
  components: {
    VHeader,
    VNav,
    VFooter,
    GridPosts,
    AddPost
  },
  layout: 'default',
  data () {
    return {
      posts: []
    };
  },
  created () {

  },
  mounted () {
  },
  methods: {
    setPost (post) {
      this.posts.push(post);
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: grid;
}

header {
  width: 100%;
  display: block;
}
</style>
