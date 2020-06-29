export default function ({ app, redirect }) {
  if (app.$cookies.get('jwt') === undefined) {
    redirect('/login')
  }
}
