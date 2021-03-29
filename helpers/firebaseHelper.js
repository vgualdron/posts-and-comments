import Firebase from 'firebase';
import firebaseConfig from '../config/firebase.config';
const config = {
  ...firebaseConfig
};

let app = null;

if (!Firebase.apps.length) {
  app = Firebase.initializeApp(config);
} else {
  app = Firebase.app();
}

const db = app.database();
const posts = db.ref('posts');

const firebaseHelper = {
  getRef () {
    return posts;
  },
  getUserOnSesion () {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  getUidUserOnSesion () {
    return this.getUserOnSesion() ? this.getUserOnSesion().uid : null;
  },
  async addPost (object) {
    await posts.push(object, function (error) {
      if (error) {
        alert('Error al intentar agregar el registro.', 'Aviso');
      } else {
        console.log('Registro agregado correctamente.', 'Aviso');
      }
    });
  },
  async addComment (object, idPost) {
    const postRef = db.ref('posts/' + idPost + '/comments');
    await postRef.push(object, function (error) {
      if (error) {
        alert('Error al intentar agregar el comentario.', 'Aviso');
      } else {
        console.log('Comentario agregado correctamente.', 'Aviso');
      }
    });
  },
  async addReaction (object, idPost) {
    const postRef = db.ref('posts/' + idPost + '/reactions');
    await postRef.push(object, function (error) {
      if (error) {
        alert('Error al intentar agregar la reacción.', 'Aviso');
      } else {
        console.log('Reacción agregada correctamente.', 'Aviso');
      }
    });
  },
  async removeReaction (idPost, idReaction) {
    console.log(idPost);
    console.log(idReaction);
    const postRef = db.ref('posts/' + idPost + '/reactions/' + idReaction);
    await postRef.remove(function (error) {
      if (error) {
        alert('Error al intentar eliminar la reacción.', 'Aviso');
      } else {
        console.log('Reacción eliminada correctamente.', 'Aviso');
      }
    });
  }
};

export default firebaseHelper;
