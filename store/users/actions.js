export default {
  getUsers({ commit }) {
    return this.$axios.$get('users').then((response) => {
      commit('STORE', response)
    })
  },

  // createUsers({ commit }, { id, ...data }) {
  //   return this.$axios.$post('auth/signup', { ...data })
  // },
}
