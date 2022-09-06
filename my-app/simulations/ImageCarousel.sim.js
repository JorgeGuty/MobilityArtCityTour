const data = [
  { url: 'https://kolbi.cr/wps/contenthandler/dav/content/libraries/wcm.library.kolbi%20es/components/mikolbi/Kioskos/MainBanner/wcm.comps.image/es_mainbannerkolbi2_tab.png' },
  { url: 'https://kolbi.cr/wps/contenthandler/dav/content/libraries/wcm.library.kolbi%20es/components/mikolbi/Kioskos/MainBanner/wcm.comps.image/es_mainbannerkolbi1_tab.png' },
  { url: 'https://kolbi.cr/wps/contenthandler/dav/content/libraries/wcm.library.kolbi%20es/components/mikolbi/Kioskos/MainBanner/wcm.comps.image/es_mainbannerkolbi3_tab.png' },
  { url: 'https://kolbi.cr/wps/contenthandler/dav/content/libraries/wcm.library.kolbi%20es/components/mikolbi/Kioskos/MainBanner/wcm.comps.image/es_mainbannerkolbi4_tab.png' },
  { url: 'https://kolbi.cr/wps/contenthandler/dav/content/libraries/wcm.library.kolbi%20es/components/mikolbi/Kioskos/MainBanner/wcm.comps.image/es_mainbannerkolbi5_tab.png' }
]

const getServerData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 333)
  })
}

export default getServerData
