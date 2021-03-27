<template>
  <img :class="clas" src="../assets/images/profile-background-gray.png" />
</template>

<script>
export default {
  name: 'ImageProfile',
  props: {
    size: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      clas: ''
    };
  },
  mounted () {
    this.clas = 'profile-' + this.size;
  },
  methods: {

  }
};
</script>
