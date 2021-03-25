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
import firebase from '../../helpers/firebase';
import Header from '~/components/Header.vue';
import Nav from '~/components/Nav.vue';
import GridPosts from '~/components/GridPosts.vue';
import AddPost from '~/components/AddPost.vue';
import Footer from '~/components/Footer.vue';

export default {
  name: 'Login',
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
    const self = this;
    self.isSigned = await firebase.isSigned();
    firebase.getRef().orderByChild('description').on('value', function (snapshot) {
      const posts = snapshot.val();
      self.posts = [];
      const keys = Object.keys(posts);
      keys.forEach((element) => {
        self.posts.push(posts[element]);
      });
    }, function (errorObject) {
      console.log('The read failed: ' + errorObject.code);
    });
  },
  mounted () {
  },
  methods: {
    setPost () {
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
