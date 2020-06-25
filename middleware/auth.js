export default function ({ store, redirect }) {
  if (store.state.checkJwt === false) {
    redirect('/login')
  }
}
