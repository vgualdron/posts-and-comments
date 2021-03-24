<template>
  <div>
    information del post
    <InformationPostReactions />
    <InformationPostComments />
  </div>
</template>

<script>
import InformationPostReactions from '~/components/InformationPostReactions.vue';
import InformationPostComments from '~/components/InformationPostComments.vue';
export default {
  name: 'information-post',
  components: {
    InformationPostReactions,
    InformationPostComments
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
