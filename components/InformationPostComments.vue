<template>
  <div v-if="comments && comments.length > 0 " class="label-count-comments">
    {{comments.length}} {{comments.length > 1 ? ' Comentarios' : 'Comentario'}}
  </div>
</template>

<script>
export default {
  name: 'InformationPostComments',
  props: {
    comments: {
      type: Array,
      require: true
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
