<template>
  <article class="post">
    <table>
      <tr>
        <td class="td-image">
          <ImageProfile :size="sizeImage" />
        </td>
        <td>
          <h1 v-if="post && post.user" class="post-user-name">
            {{post.user.email}}
          </h1>
          <h4 class="post-date">
            {{new Date(post.date).toLocaleString()}}
          </h4>
          <p class="post-description">
            {{post.description}}
          </p>
        </td>
      </tr>
    </table>
    <table class="information-post">
      <tr>
        <td class="data-one">
          <InformationPostReactions />
        </td>
        <td class="data-two">
          <InformationPostComments />
        </td>
      </tr>
    </table>
    <!--<table class="actions">
      <tr>
        <td>
          <ActionsPost />
        </td>
      </tr>
    </table> -->
    <GridComments />
    <AddComment />
  </article>
</template>

<script>
// import InformationPost from '~/components/InformationPost.vue';
// import ActionsPost from '~/components/ActionsPost.vue';
import ImageProfile from '~/components/ImageProfile.vue';
import InformationPostReactions from '~/components/InformationPostReactions.vue';
import InformationPostComments from '~/components/InformationPostComments.vue';
import GridComments from '~/components/GridComments.vue';
import AddComment from '~/components/AddComment.vue';

export default {
  name: 'Post',
  components: {
    InformationPostReactions,
    InformationPostComments,
    // ActionsPost,
    ImageProfile,
    GridComments,
    AddComment
  },
  props: {
    post: Object
  },
  data () {
    return {
      sizeImage: 'md'
    };
  },
  mounted () {
  },
  methods: {

  }
};
</script>
