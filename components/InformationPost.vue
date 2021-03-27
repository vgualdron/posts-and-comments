<template>
  <table class="informations-post">
    <tr>
      <td class="data-one">
        <InformationPostReactions />
      </td>
      <td class="data-two">
        <InformationPostComments />
      </td>
    </tr>
  </table>
</template>

<script>
import InformationPostReactions from '~/components/InformationPostReactions.vue';
import InformationPostComments from '~/components/InformationPostComments.vue';
export default {
  name: 'InformationPost',
  components: {
    InformationPostReactions,
    InformationPostComments
  },
  props: {

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
