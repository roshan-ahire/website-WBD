export const state = () => ({
  value: false
})

export const mutations = {
  toggle(state, data) {
    state.value = data
  }
}

export const getters = {
  value: (state) => state.value
}
