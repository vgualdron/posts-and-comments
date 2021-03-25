<template>
  <div>
    Actions del post
    <ActionPostReact />
    <ActionPostComment />
  </div>
</template>

<script>
import ActionPostReact from '~/components/ActionPostReact.vue';
import ActionPostComment from '~/components/ActionPostComment.vue';
export default {
  name: 'ActionsPost',
  components: {
    ActionPostReact,
    ActionPostComment
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
