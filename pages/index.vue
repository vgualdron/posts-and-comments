<template>
  <div>
    <Header />
    <section class="container">
      <AddPost @successfulPost="setPost" />
      <GridPosts :posts="posts" />
      <Footer />
    </section>
  </div>
</template>

<script>
import firebase from '../helpers/firebase';
import Header from '~/components/Header.vue';
import GridPosts from '~/components/GridPosts.vue';
import AddPost from '~/components/AddPost.vue';
import Footer from '~/components/Footer.vue';

export default {
  name: 'Inicio',
  components: {
    Header,
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
