<template>
  <article>
    <Header />
    <Login />
    <Footer />
  </article>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import Login from '~/components/Login.vue';

export default {
  name: 'PageLogin',
  components: {
    Header,
    Footer,
    Login
  },
  layout: 'default',
  data () {
    return {
    };
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
};
</script>
