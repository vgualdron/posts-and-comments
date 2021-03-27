<template>
  <table>
    <tr>
      <td class="td-image">
        <ImageProfile :size="sizeImage" />
      </td>
      <td>
        <h1 class="comment-user-name">
          Yeli Calderón
        </h1>
        <h4 class="comment-date">
          fecha
        </h4>
        <p class="comment-description">
          esto es un comentario
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
