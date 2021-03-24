<template>
  <div>
    {{post.description}}
    <InformationPost />
    <ActionsPost />
    <GridComments />
  </div>
</template>

<script>
import InformationPost from '~/components/InformationPost.vue';
import ActionsPost from '~/components/ActionsPost.vue';
import GridComments from '~/components/GridComments.vue';
export default {
  name: 'post',
  components: {
    InformationPost,
    ActionsPost,
    GridComments
  },
  props: {
    post: Object
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
