<template>
  <article class="grid-comments">
    <Comment class="comment" v-for="comment in comments" :key="comment.id" :comment="comment"/>
  </article>
</template>

<script>
import Comment from '~/components/Comment.vue';
export default {
  name: 'GridComments',
  components: {
    Comment
  },
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
  mounted () {
  },
  methods: {

  }
};
</script>
