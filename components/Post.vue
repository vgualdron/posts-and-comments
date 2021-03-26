<template>
  <article class="post">
    <table>
      <tr>
        <td class="td-image">
          <ImageProfile />
        </td>
        <td>
          <h1 class="post-user-name">
            {{post.user.email}}
          </h1>
          <h4 class="post-date">
            {{post.date}}
          </h4>
          <p class="post-description">
            {{post.description}}
          </p>
        </td>
      </tr>
    </table>
    <table>
      <tr>
        <td class="td-image">
        </td>
        <td>
          <InformationPost />
          <ActionsPost />
          <GridComments />
        </td>
      </tr>
    </table>
  </article>
</template>

<script>
import InformationPost from '~/components/InformationPost.vue';
import ActionsPost from '~/components/ActionsPost.vue';
import GridComments from '~/components/GridComments.vue';
import ImageProfile from '~/components/ImageProfile.vue';

export default {
  name: 'Post',
  components: {
    InformationPost,
    ActionsPost,
    GridComments,
    ImageProfile
  },
  props: {
    post: Object
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
