
export const state = () => ({
  menus: {
    top: {},
    footer: {}
  },
  general: {}
})


export const getters = {
  getMenus(state) {
    return state.menus
  },
  
  getGeneral(state) {
    return state.general
  },
}

export const mutations = {
  setTopMenu(state, data ) {    
    state.menus.top = data
  },
  setFooterMenu(state, data ) {    
    state.menus.footer = data
  },

  setGeneral(state, data ) {    
    state.general = data
  },
}
