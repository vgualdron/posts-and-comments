<template>
  <div v-if="reactions && reactions.length > 0 " class="label-count-reactions">
    <img src="../assets/images/star.png">
    {{ reactions.length }}
  </div>
</template>

<script>
export default {
  name: 'InformationPostReactions',
  props: {
    reactions: {
      type: Array,
      require: true,
      default: null
    }
  },
  data () {
    return {
      icon: ''
    };
  },
  created () {
  },
  updated () {
  },
  methods: {
  }
};
</script>
