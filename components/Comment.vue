<template>
  <table>
    <tr>
      <td class="td-image">
        <ImageProfile :size="sizeImage" />
      </td>
      <td>
        <h1 v-if="comment && comment.user" class="comment-user-name">
            {{comment.user.email}}
          </h1>
        <h4 class="comment-date">
          {{new Date(comment.date).toLocaleString()}}
        </h4>
        <p class="comment-description">
          {{comment.description}}
        </p>
      </td>
    </tr>
  </table>
</template>

<script>

export default {
  name: 'Comment',
  components: {
  },
  props: {
    comment: {
      type: Object,
      require: true
    }
  },
  data () {
    return {
      sizeImage: 'xs'
    };
  },
  mounted () {
  },
  methods: {

  }
};
</script>
