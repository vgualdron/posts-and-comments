<template>
  <article>
    <Header />
    <Register />
    <Footer />
  </article>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import Register from '~/components/Register.vue';

export default {
  name: 'PageRegister',
  components: {
    Header,
    Footer,
    Register
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
