import Firebase from 'firebase';

export const state = () => {
  return {
    status: '',
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}
  };
};

export const mutations = {
  auth_request (state) {
    state.status = 'loading';
  },
  auth_success (state, user) {
    state.status = 'success';
    state.user = user;
  },
  auth_error (state) {
    state.status = 'error';
  },
  logout (state) {
    state.status = '';
    state.user = {};
  }
};

export const actions = {
  login ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit('auth_request');
      return Firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then((resp) => {
          const userData = JSON.stringify(resp.user);
          localStorage.setItem('user', userData);
          commit('auth_success', userData);
          resolve(resp);
        }).catch((error) => {
          commit('auth_error');
          localStorage.removeItem('user');
          reject(error);
        });
    });
  },
  register ({ commit }, payload) {
    console.log(payload);
    return new Promise((resolve, reject) => {
      commit('auth_request');
      return Firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((userCredential) => {
          const user = JSON.stringify(userCredential.user);
          localStorage.setItem('user', user);
          commit('auth_success', user);
          resolve(user);
        }).catch((error) => {
          commit('auth_error');
          localStorage.removeItem('token');
          reject(error);
        });
    });
  },
  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      return Firebase.auth().signOut()
        .then((resp) => {
          localStorage.removeItem('user');
          commit('logout');
          resolve(true);
        }).catch((error) => {
          reject(error);
        });
    });
  }
};

export const getters = {
  user: state => state.user,
  isLoggedIn: state => !!state.user,
  authStatus: state => state.status
};