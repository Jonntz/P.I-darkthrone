export default {
  getEvents({ commit }) {
    return this.$axios.$get('events').then((response) => {
      commit('STORE', response)
    })
  },
}
