export const Constants = {
  imageDefaultSize: {
    width: 1280,
    height: 400
  },
  imagesTest: [
    { url: 'https://kolbi.cr/wps/contenthandler/dav/content/libraries/wcm.library.kolbi%20es/components/mikolbi/Kioskos/MainBanner/wcm.comps.image/es_mainbannerkolbi2_tab.png' },
    { url: 'https://kolbi.cr/wps/contenthandler/dav/content/libraries/wcm.library.kolbi%20es/components/mikolbi/Kioskos/MainBanner/wcm.comps.image/es_mainbannerkolbi1_tab.png' },
    { url: 'https://kolbi.cr/wps/contenthandler/dav/content/libraries/wcm.library.kolbi%20es/components/mikolbi/Kioskos/MainBanner/wcm.comps.image/es_mainbannerkolbi3_tab.png' },
    { url: 'https://kolbi.cr/wps/contenthandler/dav/content/libraries/wcm.library.kolbi%20es/components/mikolbi/Kioskos/MainBanner/wcm.comps.image/es_mainbannerkolbi4_tab.png' },
    { url: 'https://kolbi.cr/wps/contenthandler/dav/content/libraries/wcm.library.kolbi%20es/components/mikolbi/Kioskos/MainBanner/wcm.comps.image/es_mainbannerkolbi5_tab.png' }
  ],
  sendCodeOptionsTest: [
    { type: 'email', value: 'te****@gmail.com' },
    { type: 'phoneNumber', value: '8846 2311' }
  ],
  speedDetailDefaultAmount: '0',
  speedDetailOptionsTitles: [
    'De 50 a 500 megas',
    'De 500 a 1.5 Gygas'
  ],
  speedDetailOptions: [
    [{ speed: '20 Megas', amount: '₡27 400' },
      { speed: '30 Megas', amount: '₡30 400' },
      { speed: '50 Megas', amount: '₡34 400' },
      { speed: '100 Megas', amount: '₡40 400' },
      { speed: '200 Megas', amount: '₡42 400' },
      { speed: '300 Megas', amount: '₡44 400' },
      { speed: '500 Megas', amount: '₡50 400' }],
    [{ speed: '500 Megas', amount: '₡27 400' },
      { speed: '600 Megas', amount: '₡30 400' },
      { speed: '700 Megas', amount: '₡34 400' },
      { speed: '800 Megas', amount: '₡40 400' },
      { speed: '900 Megas', amount: '₡42 400' },
      { speed: '1 GygaByte', amount: '₡44 400' },
      { speed: '1.5 GygaBytes', amount: '₡50 400' }]
  ],
  speedDetailUserTest: {
    number: '656565 6565565',
    speed: '10 Megas'
  },
  invoiceDetailInfo: [
    {
      invoiceAmount: '₡ 44 562.00',
      invoiceNumber: '410164',
      invoiceTitle: 'Factura telefonica',
      itemPaid: false,
      period: 'Enero 31, 2022'
    }, {
      invoiceAmount: '₡ 44 562.00',
      invoiceNumber: '410164',
      invoiceTitle: 'Factura telefonica',
      itemPaid: true,
      period: 'Diciembre 31, 2022'
    }, {
      invoiceAmount: '₡ 44 562.00',
      invoiceNumber: '410164',
      invoiceTitle: 'Factura telefonica',
      itemPaid: true,
      period: 'Noviembre 31, 2022'
    }, {
      invoiceAmount: '₡ 44 562.00',
      invoiceNumber: '410164',
      invoiceTitle: 'Factura telefonica',
      itemPaid: true,
      period: 'Septiembre 31, 2022'
    }
  ],
  modalStyle: {
    width: '60%',
    height: '100%'
  },
  buttons: [
    {
      flex: true,
      disabled: false,
      ext: ['Kit prepago', 'Chip prepago kölbi + teléfono'],
      style: { width: '100%', height: 93, justifyContent: 'center' }
    },
    {
      flex: true,
      disabled: false,
      ext: ['Plan Postpago', 'Plan postpago kölbi + teléfono'],
      style: { width: '100%', height: 93, justifyContent: 'center' }
    },
    {
      flex: true,
      disabled: false,
      ext: ['De Contado', 'Solo teléfono'],
      style: { width: '100%', height: 93, justifyContent: 'center' }
    }
  ]
}
