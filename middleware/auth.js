export default function auth ({ store, redirect, route }) {
  console.log('auth.js');
  console.log(store.getters.loggedIn);
  // If the user is not authenticated
  if (route.path === '/' && !store.getters.loggedIn) {
    return redirect('/login');
  }
};
