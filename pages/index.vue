<template>
  <div class="container">
    <Header />
    <Nav />
    <AddPost @successfulPost="setPost" />
    <GridPosts :posts="posts" />
    <Footer />
  </div>
</template>

<script>
import firebase from '../helpers/firebase';
import Header from '~/components/Header.vue';
import Nav from '~/components/Nav.vue';
import GridPosts from '~/components/GridPosts.vue';
import AddPost from '~/components/AddPost.vue';
import Footer from '~/components/Footer.vue';

export default {
  name: 'Inicio',
  components: {
    Header,
    Nav,
    Footer,
    GridPosts,
    AddPost
  },
  layout: 'default',
  data () {
    return {
      isSigned: false,
      posts: []
    };
  },
  async created () {
    this.isSigned = await firebase.isSigned();
  },
  mounted () {
  },
  methods: {
    async setPost (post) {
      await firebase.add(post);
      const posts = await firebase.get();
      console.log(posts);
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
