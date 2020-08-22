export const state = () => ({
  current: '',
  options: [
    {
      name: 'Your device time',
      value: ''
    },
    {
      name: 'System time (GMT+00:00)',
      value: 'GMT'
    },
    {
      name: 'Your device time',
      value: 'this.$moment.tz.guess()'
    },
    {
      name: 'India Standard Time (GMT+5:30)',
      value: 'Asia/Calcutta'
    }
  ],
  selected: ''
})

export const mutations = {
  SET_TZ(state, data) {
    // localStorage.setItem('selectedTZ', data)
    state.selected = data
  }
}

export const getters = {
  current: (state) => state.current,
  options: (state) => state.options,
  selected: (state) => state.selected
}
