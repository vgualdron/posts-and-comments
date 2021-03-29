<template>
  <span @click="click" ref="span">
    Comentar
  </span>
</template>

<script>
export default {
  name: 'ActionPostComment',
  props: {

  },
  data () {
    return {
    };
  },
  mounted () {
  },
  methods: {
    click () {
      this.$emit('clickAddComment');
    }
  }
};
</script>
