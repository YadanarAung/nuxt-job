import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'vuex',
    storage: localStorage,
    reducer: (state) => ({ job: state.job }),
   // filter: (mutation) => mutation.type === 'SET_JOBS'

  })(store)
}
