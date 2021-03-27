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
  async login () {
    return await Firebase.auth().signInWithEmailAndPassword(
      firebaseConfig.user.email, firebaseConfig.user.password
    );
  },
  async logout (self) {
    localStorage.removeItem('user');
    return await Firebase.auth().signOut();
  },
  async isSigned () {
    const result = await this.login();
    if (result && result.user) {
      localStorage.setItem('user', JSON.stringify(result.user));
      return true;
    }
    return false;
  },
  getUserOnSesion () {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },
  getUidUserOnSesion () {
    return this.getUserOnSesion().uid;
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
  }
};

export default firebaseHelper;
