<template>
  <article class="post">
    <table class="container">
      <tr>
        <td class="td-image">
          <ImageProfile :size="sizeImage" />
        </td>
        <td>
          <h1 v-if="post && post.user" class="post-user-name">
            {{ post.user.email }}
          </h1>
          <h4 class="post-date">
            {{ new Date(post.date).toLocaleString() }}
          </h4>
          <p class="post-description">
            {{ post.description }}
          </p>
          <section class="actions">
            <article class="actions-posts actions-in-description">
              <ActionPostReact />
            </article>
            <article class="actions-posts actions-in-description">
              <ActionPostComment @clickAddComment="clickAddComment" />
            </article>
          </section>
        </td>
      </tr>
    </table>
    <table v-if="post.comments && post.comments.length > 0" class="information-post">
      <tr>
        <td class="data-one">
          <InformationPostReactions :likes="post.likes" />
        </td>
        <td class="data-two">
          <InformationPostComments :comments="post.comments" />
        </td>
      </tr>
    </table>
    <section class="actions apart">
      <article class="actions-posts actions-apart">
        <ActionPostReact />
      </article>
      <article class="actions-posts actions-apart second">
        <ActionPostComment @clickAddComment="clickAddComment" />
      </article>
    </section>
    <GridComments :comments="post.comments" />
    <AddComment :post="post" ref="addComment"/>
  </article>
</template>
<script>
// import InformationPost from '~/components/InformationPost.vue';
import ActionPostComment from '~/components/ActionPostComment.vue';
import ActionPostReact from '~/components/ActionPostReact.vue';
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
    ActionPostComment,
    ActionPostReact,
    ImageProfile,
    GridComments,
    AddComment
  },
  props: {
    post: {
      type: Object,
      require: true,
      default: null
    }
  },
  data () {
    return {
      sizeImage: 'md'
    };
  },
  mounted () {
  },
  methods: {
    clickAddComment () {
      const refs = this.$refs;
      if (refs && refs.addComment) {
        const internalRefs = refs.addComment.$refs;
        if (internalRefs && internalRefs.textareaAddComment) {
          internalRefs.textareaAddComment.focus();
        }
      }
    }
  }
};
</script>
