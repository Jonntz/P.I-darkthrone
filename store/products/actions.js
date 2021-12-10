export default {
  getProducts({ commit }) {
    return this.$axios.$get('products').then((response) => {
      commit('STORE', response)
    })
  },
}
