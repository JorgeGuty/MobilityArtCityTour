const categories = ['Cerca de mí', 'Restaurantes', 'Tiendas', 'Centros Culturales', 'Museos']
const pointsOfInterest = [
  {
    placeName: 'Pizza Hut',
    category: 'Restaurante',
    isOpen: true,
    description: 'Officia eiusmod do ex nisi consequat eu occaecat officia anim mollit do. Cillum Lorem proident dolore id aute mollit ut consequat magna aliquip adipisicing. Eiusmod cupidatat cillum nostrud eiusmod dolor excepteur proident proident est. Laboris esse ad elit est occaecat laborum qui dolore quis velit enim ad commodo. Cupidatat ea nisi nisi occaecat veniam tempor labore sit esse. Incididunt cupidatat reprehenderit sit anim aliquip anim culpa in amet incididunt qui velit.',
    phone: '+506 2256 7895',
    economicCategory: '$$',
    imageUrl: 'https://th.bing.com/th/id/R.8c7b3df6d0e9aa6fec0b3357df431af4?rik=epV1PJJz7oEAzw&pid=ImgRaw&r=0', 
    location: {
        latitude: 9.934444427256512, 
        longitude: -84.08082706633098,
    }
  },
  {
    placeName: 'Jardin de Lolita',
    category: 'Restaurante',
    isOpen: true,
    description: 'Officia eiusmod do ex nisi consequat eu occaecat officia anim mollit do. Cillum Lorem proident dolore id aute mollit ut consequat magna aliquip adipisicing. Eiusmod cupidatat cillum nostrud eiusmod dolor excepteur proident proident est. Laboris esse ad elit est occaecat laborum qui dolore quis velit enim ad commodo. Cupidatat ea nisi nisi occaecat veniam tempor labore sit esse. Incididunt cupidatat reprehenderit sit anim aliquip anim culpa in amet incididunt qui velit.',
    phone: '+506 2256 7895',
    economicCategory: '$$',
    imageUrl: 'https://static.wixstatic.com/media/74e708_e126171bd5c2439495f7bd226ba9b298~mv2_d_4856_2731_s_4_2.jpg/v1/fill/w_717,h_403,al_c,q_80,usm_0.66_1.00_0.01/74e708_e126171bd5c2439495f7bd226ba9b298~mv2_d_4856_2731_s_4_2.jpg', 
    location: {
        latitude: 9.934370451490139, 
        longitude: -84.07953960602954,
    }
  },  
  {
    placeName: 'Riverside',
    category: 'Restaurante',
    isOpen: true,
    description: 'Officia eiusmod do ex nisi consequat eu occaecat officia anim mollit do. Cillum Lorem proident dolore id aute mollit ut consequat magna aliquip adipisicing. Eiusmod cupidatat cillum nostrud eiusmod dolor excepteur proident proident est. Laboris esse ad elit est occaecat laborum qui dolore quis velit enim ad commodo. Cupidatat ea nisi nisi occaecat veniam tempor labore sit esse. Incididunt cupidatat reprehenderit sit anim aliquip anim culpa in amet incididunt qui velit.',
    phone: '+506 2256 7895',
    economicCategory: '$$$',
    imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/44/05/75/riverside-marketplace.jpg', 
    location: {
        latitude: 9.93282166570128, 
        longitude: -84.08083509051531
    }
  },  
  {
    placeName: 'Museo de los Niños',
    category: 'Museo',
    isOpen: true,
    description: 'Officia eiusmod do ex nisi consequat eu occaecat officia anim mollit do. Cillum Lorem proident dolore id aute mollit ut consequat magna aliquip adipisicing. Eiusmod cupidatat cillum nostrud eiusmod dolor excepteur proident proident est. Laboris esse ad elit est occaecat laborum qui dolore quis velit enim ad commodo. Cupidatat ea nisi nisi occaecat veniam tempor labore sit esse. Incididunt cupidatat reprehenderit sit anim aliquip anim culpa in amet incididunt qui velit.',
    phone: '+506 2256 7895',
    economicCategory: '$$',
    imageUrl: 'https://yt3.ggpht.com/a/AATXAJyCvP6aZDz-qqBV86cuCqH8bJUhBpVRlAYnfQ=s900-c-k-c0xffffffff-no-rj-mo', 
    location: {
        latitude: 9.932358928968858,
        longitude:  -84.07829645730097
    }
  },  
  {
    placeName: 'Museo De Dinosaurios',
    category: 'Museo',
    isOpen: false,
    description: 'Officia eiusmod do ex nisi consequat eu occaecat officia anim mollit do. Cillum Lorem proident dolore id aute mollit ut consequat magna aliquip adipisicing. Eiusmod cupidatat cillum nostrud eiusmod dolor excepteur proident proident est. Laboris esse ad elit est occaecat laborum qui dolore quis velit enim ad commodo. Cupidatat ea nisi nisi occaecat veniam tempor labore sit esse. Incididunt cupidatat reprehenderit sit anim aliquip anim culpa in amet incididunt qui velit.',
    phone: '+506 2256 7895',
    economicCategory: '$',
    imageUrl: 'https://th.bing.com/th/id/OIP.gqFo2t1cQ51Nicna6t6j7wHaFj?pid=ImgDet&rs=1', 
    location: {
        latitude: 9.93505156120249, 
        longitude: -84.07663384845789,
    }
  },             
]

export const getCategories = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categories)
      }, 333)
    })
}

export const getPointsOfInterest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(pointsOfInterest)
    }, 333)
  })
}