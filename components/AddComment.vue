<template>
  <form class="add-comment" @submit="submit">
    <fieldset class="without-border-bottom without-border-radius-bottom white">
      <textarea class="form-control border-none secondary" v-model="description" placeholder="Escribe aquí tu estado">
      </textarea>
    </fieldset>
    <fieldset v-if="description.trim().length > 0" class="without-border-top without-border-radius-top white">
      <button class="btn btn-primary" type="submit">Publicar</button>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: 'AddComment',
  props: {

  },
  data () {
    return {
      description: ''
    };
  },
  mounted () {
  },
  methods: {
    submit: (event) => {
      event.preventDefault();
      console.log('agregar comentario');
    }

  }
};
</script>
