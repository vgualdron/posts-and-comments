<template>
  <div>
    <Header />
    <section class="container">
      <AddPost @successfulPost="setPost" />
      <GridPosts :posts="posts" />
    </section>
    <Footer />
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
    firebase.getRef().orderByChild('date').on('value', function (snapshot) {
      const posts = snapshot.val();
      self.posts = [];
      if (posts) {
        const keys = Object.keys(posts);
        if (keys) {
          keys.forEach((element) => {
            self.posts.push(posts[element]);
          });
          const arrayTemp = self.posts.sort((a, b) => b.date - a.date);
          self.posts = [...arrayTemp];
        }
      }
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
