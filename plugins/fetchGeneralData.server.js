
export default async ({ store, $axios }) => {
  try {
    const topMenuData = await $axios.$get('/menus/v1/menus/top-menu')
    store.commit('setTopMenu', topMenuData)

    const footerMenuData = await $axios.$get('/menus/v1/menus/footer-menu')
    store.commit('setFooterMenu', footerMenuData)
    
    const generalData = await $axios.$get('/acf/v3/settings-custom/81')
    store.commit('setGeneral', generalData.acf)

    const offersData = await $axios.$get('/wp/v2/job-offers')
    store.commit('setOffers', offersData)

    const projectsData = await $axios.$get('/wp/v2/home-projects?per_page=50')
    store.commit('setProjects', projectsData)

  } catch (error) {
    console.error('Error fetching data:', error);
  }
};