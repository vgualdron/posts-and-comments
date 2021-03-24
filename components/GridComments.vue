<template>
  <div>
    <Comment />
    <AddComment />
  </div>
</template>

<script>
import Comment from '~/components/Comment.vue';
import AddComment from '~/components/AddComment.vue';
export default {
  name: 'grid-comments',
  components: {
    Comment,
    AddComment
  },
  props: {

  },
  data () {
    return {
      user: '',
      password: ''
    };
  },
  mounted () {
  },
  methods: {

  }
};
</script>
