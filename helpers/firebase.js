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

const firebase = {
  getRef () {
    return posts;
  },
  async login () {
    return await Firebase.auth().signInWithEmailAndPassword(
      firebaseConfig.user.email, firebaseConfig.user.password
    );
  },
  async logout () {
    return await Firebase.auth().signOut();
  },
  async isSigned () {
    const result = await this.login();
    if (result && result.user) {
      return true;
    }
    return false;
  },
  getUserOnSesion () {
    return firebase.auth().currentUser;
  },
  getUidUserOnSesion () {
    return this.getUserOnSesion().uid;
  },
  async add (object) {
    await posts.push(object, function (error) {
      if (error) {
        console.log('Error al intentar agregar el registro.', 'Aviso');
      } else {
        console.log('Registro agregado correctamente.', 'Aviso');
      }
    });
  },
  async get () {
    // return await posts.get();
  }
};

export default firebase;
