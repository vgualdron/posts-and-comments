<template>
  <div v-if="reactions && reactions.length > 0 " class="label-count-comments">
    {{ reactions.length }} {{ reactions.length > 1 ? ' Reacciones' : 'Reacción' }}
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
