
export const state = () => ({
  menus: {},
  general: {}
})


export const getters = {
  getMenus(state) {
    return state.menus
  },
  
  getGeneral(state) {
    return state.menus
  },
}

export const mutations = {
  setMenus(state, data ) {    
    state.menus = data
  },

  setGeneral(state, data ) {    
    state.general = data
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const menuData = await this.$axios.$get('/menus/v1/menus/top-menu')
    commit('setMenus', menuData)

    const generalData = await this.$axios.$get('/wp/v2/settings-custom/81')
    if (generalData.acf) {
      commit('setGeneral', generalData.acf)
    }
  }
}
