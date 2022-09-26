const data = [{
    name: "Ruta Davivienda",
    stops: [
        {
          id: 1,
          name: "Museo del Jade", 
          latitude: 9.933102329459889,
          longitude: -84.07883146031479,
          type: 'Museo',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Lorem sed risus ultricies tristique nulla aliquet. Non quam lacus suspendisse faucibus interdum. \n Orci ac auctor augue mauris augue. In hac habitasse platea dictumst vestibulum rhoncus est.Orci sagittis eu volutpat odio facilisis. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Maecenas sed enim ut sem viverra aliquet. Donec et odio pellentesque diam volutpat commodo sed egestas. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Consequat interdum varius sit amet mattis vulputate enim nulla. Mauris ultrices eros in cursus turpis massa tincidunt dui. Volutpat lacus laoreet non curabitur gravida arcu ac. Eu volutpat odio facilisis mauris sit amet massa vitae. Ultricies tristique nulla aliquet enim tortor at auctor urna. Nec feugiat nisl pretium fusce id velit ut. Interdum varius sit amet mattis vulputate enim nulla aliquet.',
          visited: false
        },
        {
          id: 2,
          name: "Galería Nacional",
          latitude: 9.934839216718778,
          longitude: -84.07742079459402,
          type: 'Museo',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Lorem sed risus ultricies tristique nulla aliquet. Non quam lacus suspendisse faucibus interdum. \n Orci ac auctor augue mauris augue. In hac habitasse platea dictumst vestibulum rhoncus est.Orci sagittis eu volutpat odio facilisis. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Maecenas sed enim ut sem viverra aliquet. Donec et odio pellentesque diam volutpat commodo sed egestas. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Consequat interdum varius sit amet mattis vulputate enim nulla. Mauris ultrices eros in cursus turpis massa tincidunt dui. Volutpat lacus laoreet non curabitur gravida arcu ac. Eu volutpat odio facilisis mauris sit amet massa vitae. Ultricies tristique nulla aliquet enim tortor at auctor urna. Nec feugiat nisl pretium fusce id velit ut. Interdum varius sit amet mattis vulputate enim nulla aliquet.',
          visited: false
        },
        {
          id: 3,
          name: "Museos del Banco Central",
          latitude: 9.933536716560706,
          longitude: -84.07402211199698,
          type: 'Museo',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Lorem sed risus ultricies tristique nulla aliquet. Non quam lacus suspendisse faucibus interdum. \n Orci ac auctor augue mauris augue. In hac habitasse platea dictumst vestibulum rhoncus est.Orci sagittis eu volutpat odio facilisis. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Maecenas sed enim ut sem viverra aliquet. Donec et odio pellentesque diam volutpat commodo sed egestas. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Consequat interdum varius sit amet mattis vulputate enim nulla. Mauris ultrices eros in cursus turpis massa tincidunt dui. Volutpat lacus laoreet non curabitur gravida arcu ac. Eu volutpat odio facilisis mauris sit amet massa vitae. Ultricies tristique nulla aliquet enim tortor at auctor urna. Nec feugiat nisl pretium fusce id velit ut. Interdum varius sit amet mattis vulputate enim nulla aliquet.',
          visited: false
        },
        {
          id: 4,
          name: "Centro de Patrimonio",
          latitude: 9.931424861881835,
          longitude: -84.07506236200061,
          type: 'Museo',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Lorem sed risus ultricies tristique nulla aliquet. Non quam lacus suspendisse faucibus interdum. \n Orci ac auctor augue mauris augue. In hac habitasse platea dictumst vestibulum rhoncus est.Orci sagittis eu volutpat odio facilisis. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Maecenas sed enim ut sem viverra aliquet. Donec et odio pellentesque diam volutpat commodo sed egestas. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Consequat interdum varius sit amet mattis vulputate enim nulla. Mauris ultrices eros in cursus turpis massa tincidunt dui. Volutpat lacus laoreet non curabitur gravida arcu ac. Eu volutpat odio facilisis mauris sit amet massa vitae. Ultricies tristique nulla aliquet enim tortor at auctor urna. Nec feugiat nisl pretium fusce id velit ut. Interdum varius sit amet mattis vulputate enim nulla aliquet.',
          visited: false
        },
        {
          id: 5,
          name: "Alianza Francesa",
          latitude: 9.931482589304355,
          longitude: -84.08015128453218,
          type: 'Museo',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Lorem sed risus ultricies tristique nulla aliquet. Non quam lacus suspendisse faucibus interdum. \n Orci ac auctor augue mauris augue. In hac habitasse platea dictumst vestibulum rhoncus est.Orci sagittis eu volutpat odio facilisis. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Maecenas sed enim ut sem viverra aliquet. Donec et odio pellentesque diam volutpat commodo sed egestas. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Consequat interdum varius sit amet mattis vulputate enim nulla. Mauris ultrices eros in cursus turpis massa tincidunt dui. Volutpat lacus laoreet non curabitur gravida arcu ac. Eu volutpat odio facilisis mauris sit amet massa vitae. Ultricies tristique nulla aliquet enim tortor at auctor urna. Nec feugiat nisl pretium fusce id velit ut. Interdum varius sit amet mattis vulputate enim nulla aliquet.',
          visited: false
        }
    
      ]
  }, {
    name: "Ruta Mirador",
    stops: [
        {
          id: 1,
          name: "Museo del Ojo", 
          latitude: 9.933102329459889,
          longitude: -84.07883146031479,
          type: 'Museo',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Lorem sed risus ultricies tristique nulla aliquet. Non quam lacus suspendisse faucibus interdum. \n Orci ac auctor augue mauris augue. In hac habitasse platea dictumst vestibulum rhoncus est.Orci sagittis eu volutpat odio facilisis. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Maecenas sed enim ut sem viverra aliquet. Donec et odio pellentesque diam volutpat commodo sed egestas. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Consequat interdum varius sit amet mattis vulputate enim nulla. Mauris ultrices eros in cursus turpis massa tincidunt dui. Volutpat lacus laoreet non curabitur gravida arcu ac. Eu volutpat odio facilisis mauris sit amet massa vitae. Ultricies tristique nulla aliquet enim tortor at auctor urna. Nec feugiat nisl pretium fusce id velit ut. Interdum varius sit amet mattis vulputate enim nulla aliquet.',
          visited: false
        },
        {
          id: 2,
          name: "Galería Nacional de Optica",
          latitude: 9.934839216718778,
          longitude: -84.07742079459402,
          type: 'Museo',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Lorem sed risus ultricies tristique nulla aliquet. Non quam lacus suspendisse faucibus interdum. \n Orci ac auctor augue mauris augue. In hac habitasse platea dictumst vestibulum rhoncus est.Orci sagittis eu volutpat odio facilisis. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Maecenas sed enim ut sem viverra aliquet. Donec et odio pellentesque diam volutpat commodo sed egestas. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Consequat interdum varius sit amet mattis vulputate enim nulla. Mauris ultrices eros in cursus turpis massa tincidunt dui. Volutpat lacus laoreet non curabitur gravida arcu ac. Eu volutpat odio facilisis mauris sit amet massa vitae. Ultricies tristique nulla aliquet enim tortor at auctor urna. Nec feugiat nisl pretium fusce id velit ut. Interdum varius sit amet mattis vulputate enim nulla aliquet.',
          visited: false
        },
        {
          id: 3,
          name: "Museos de Optica Visión",
          latitude: 9.933536716560706,
          longitude: -84.07402211199698,
          type: 'Museo',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Lorem sed risus ultricies tristique nulla aliquet. Non quam lacus suspendisse faucibus interdum. \n Orci ac auctor augue mauris augue. In hac habitasse platea dictumst vestibulum rhoncus est.Orci sagittis eu volutpat odio facilisis. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Maecenas sed enim ut sem viverra aliquet. Donec et odio pellentesque diam volutpat commodo sed egestas. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Consequat interdum varius sit amet mattis vulputate enim nulla. Mauris ultrices eros in cursus turpis massa tincidunt dui. Volutpat lacus laoreet non curabitur gravida arcu ac. Eu volutpat odio facilisis mauris sit amet massa vitae. Ultricies tristique nulla aliquet enim tortor at auctor urna. Nec feugiat nisl pretium fusce id velit ut. Interdum varius sit amet mattis vulputate enim nulla aliquet.',
          visited: false
        },
        {
          id: 4,
          name: "Centro de Patrimonio",
          latitude: 9.931424861881835,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Lorem sed risus ultricies tristique nulla aliquet. Non quam lacus suspendisse faucibus interdum. \n Orci ac auctor augue mauris augue. In hac habitasse platea dictumst vestibulum rhoncus est.Orci sagittis eu volutpat odio facilisis. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Maecenas sed enim ut sem viverra aliquet. Donec et odio pellentesque diam volutpat commodo sed egestas. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Consequat interdum varius sit amet mattis vulputate enim nulla. Mauris ultrices eros in cursus turpis massa tincidunt dui. Volutpat lacus laoreet non curabitur gravida arcu ac. Eu volutpat odio facilisis mauris sit amet massa vitae. Ultricies tristique nulla aliquet enim tortor at auctor urna. Nec feugiat nisl pretium fusce id velit ut. Interdum varius sit amet mattis vulputate enim nulla aliquet.',
          longitude: -84.07506236200061,
          type: 'Museo',
          visited: false
        },
        {
          id: 5,
          name: "Alianza Francesa",
          latitude: 9.931482589304355,
          longitude: -84.08015128453218,
          type: 'Museo',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a cras. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Lorem sed risus ultricies tristique nulla aliquet. Non quam lacus suspendisse faucibus interdum. \n Orci ac auctor augue mauris augue. In hac habitasse platea dictumst vestibulum rhoncus est.Orci sagittis eu volutpat odio facilisis. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Maecenas sed enim ut sem viverra aliquet. Donec et odio pellentesque diam volutpat commodo sed egestas. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Consequat interdum varius sit amet mattis vulputate enim nulla. Mauris ultrices eros in cursus turpis massa tincidunt dui. Volutpat lacus laoreet non curabitur gravida arcu ac. Eu volutpat odio facilisis mauris sit amet massa vitae. Ultricies tristique nulla aliquet enim tortor at auctor urna. Nec feugiat nisl pretium fusce id velit ut. Interdum varius sit amet mattis vulputate enim nulla aliquet.',
          visited: false
        }
    
      ]
  }]

const getActiveRoutes = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 333)
    })
  }
  
  export default getActiveRoutes