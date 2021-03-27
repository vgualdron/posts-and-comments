<template>
  <table class="actions-post">
    <tr>
      <td class="action-one">
        Reaccionar
      </td>
      <td class="action-two">
        <ActionPostComment />
      </td>
    </tr>
  </table>
</template>

<script>
// import ActionPostReact from '~/components/ActionPostReact.vue';
import ActionPostComment from '~/components/ActionPostComment.vue';
export default {
  name: 'ActionsPost',
  components: {
    // ActionPostReact,
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
