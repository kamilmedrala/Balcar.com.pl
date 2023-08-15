
export const state = () => ({
  menus: {
    top: {},
    footer: {}
  },
  general: {},
  offers:[]
})


export const getters = {
  getMenus(state) {
    return state.menus
  },
  
  getGeneral(state) {
    return state.general
  },

  getOffers(state) {
    return state.offers
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
  setOffers(state, data ) {    
    state.offers = data
  },
}
