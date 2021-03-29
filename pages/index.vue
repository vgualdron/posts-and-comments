<template>
  <div>
    <Header />
    <section class="container">
      <Nav />
      <AddPost />
      <GridPosts v-if="posts && posts.length > 0" :posts="posts" />
    </section>
    <Footer />
  </div>
</template>

<script>
import firebaseHelper from '../helpers/firebaseHelper';
import postHelper from '../helpers/postsHelper';
import Header from '~/components/Header.vue';
import Nav from '~/components/Nav.vue';
import GridPosts from '~/components/GridPosts.vue';
import AddPost from '~/components/AddPost.vue';
import Footer from '~/components/Footer.vue';

export default {
  name: 'Home',
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
      posts: []
    };
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters.user.uid;
    }
  },
  created () {
    const self = this;
    firebaseHelper.getRef().orderByChild('date').on('value', function (snapshot) {
      const posts = snapshot.val();
      self.posts = [];
      self.posts = postHelper.parseData(posts);
    }, function (errorObject) {
      console.log('The read failed: ' + errorObject.code);
    });
  },
  mounted () {
    if (!this.isLoggedIn) {
      this.$router.push('/login');
    }
  },
  methods: {
  }
};
</script>
