
export default async ({ store, $axios }) => {
  try {
    const topMenuData = await $axios.$get('/menus/v1/menus/top-menu')
    store.commit('setTopMenu', topMenuData)

    const footerMenuData = await $axios.$get('/menus/v1/menus/footer-menu')
    store.commit('setFooterMenu', footerMenuData)
    
    const generalData = await $axios.$get('/wp/v2/settings-custom/81')
    store.commit('setGeneral', generalData.acf)

  } catch (error) {
    console.error('Error fetching data:', error);
  }
};