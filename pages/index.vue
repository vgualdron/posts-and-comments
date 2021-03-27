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
import firebaseHelper from '../helpers/firebaseHelper';
import postHelper from '../helpers/postsHelper';
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
    self.isSigned = await firebaseHelper.isSigned();
    firebaseHelper.getRef().orderByChild('date').on('value', function (snapshot) {
      console.log('******');
      const posts = snapshot.val();
      self.posts = [];
      self.posts = postHelper.parseData(posts);
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
