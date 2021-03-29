<template>
  <span ref="span" :class="classCss" @click="toggleReaction">
    {{ text }}
  </span>
</template>

<script>
import firebaseHelper from '../helpers/firebaseHelper';

export default {
  name: 'ActionPostReact',
  props: {
    location: {
      type: String,
      require: true,
      default: ''
    },
    idpost: {
      type: String,
      require: true,
      default: ''
    },
    reactions: {
      type: Array,
      require: true,
      default: null
    }
  },
  data () {
    return {
      text: 'Reaccionar',
      alreadyReacted: false,
      classCss: '',
      uidReaction: ''
    };
  },
  created () {
    this.checkReactions();
  },
  methods: {
    checkReactions () {
      const myReaction = this.reactions.find((reaction) => {
        const user = reaction.user;
        if (user) {
          const uid = user.uid;
          if (uid === firebaseHelper.getUidUserOnSesion()) {
            return true;
          }
        }
        return false;
      });

      if (myReaction) {
        this.text = 'Ya reaccionaste';
        this.alreadyReacted = true;
        this.classCss = 'already-reacted';
        this.uidReaction = myReaction.id;
      } else {
        this.text = 'Reaccionar';
        this.alreadyReacted = false;
        this.classCss = '';
        this.uidReaction = '';
      }
    },
    async toggleReaction () {
      if (!this.alreadyReacted) {
        const newReaction = {
          date: new Date().getTime(),
          user: await firebaseHelper.getUserOnSesion()
        };
        await firebaseHelper.addReaction(newReaction, this.idpost);
        this.checkReactions();
      } else {
        await firebaseHelper.removeReaction(this.idpost, this.uidReaction);
        this.checkReactions();
      }
      this.$emit('changeData', this.location);
    }
  }
};
</script>
