import jp from '../jsonpath.min.js'

const categories = [
    {
        text: 'Cerca de mí',
        value: ''

    }, 
    {
        text: 'Restaurantes',
        value: 'restaurant'
    }, 
    {
        text: 'Tiendas',
        value: 'store'
    }, 
    {
        text: 'Centros Culturales',
        value: 'landmark'
    }, 
    {
        text: 'Museos',
        value: 'museum'
    }
]
// const pointsOfInterest =
//     {
//         results: [
//             {
//                 placeName: 'Pizza Hut',
//                 category: 'Restaurante',
//                 isOpen: true,
//                 description: 'Officia eiusmod do ex nisi consequat eu occaecat officia anim mollit do. Cillum Lorem proident dolore id aute mollit ut consequat magna aliquip adipisicing. Eiusmod cupidatat cillum nostrud eiusmod dolor excepteur proident proident est. Laboris esse ad elit est occaecat laborum qui dolore quis velit enim ad commodo. Cupidatat ea nisi nisi occaecat veniam tempor labore sit esse. Incididunt cupidatat reprehenderit sit anim aliquip anim culpa in amet incididunt qui velit.',
//                 phone: '+506 2256 7895',
//                 economicCategory: '$$',
//                 imageUrl: 'https://th.bing.com/th/id/R.8c7b3df6d0e9aa6fec0b3357df431af4?rik=epV1PJJz7oEAzw&pid=ImgRaw&r=0',
//                 location: {
//                     latitude: 9.933102329459889,
//                     longitude: -84.07883146031479,
//                 }
//             },
//             {
//                 placeName: 'Jardin de Lolita',
//                 category: 'Restaurante',
//                 isOpen: true,
//                 description: 'Officia eiusmod do ex nisi consequat eu occaecat officia anim mollit do. Cillum Lorem proident dolore id aute mollit ut consequat magna aliquip adipisicing. Eiusmod cupidatat cillum nostrud eiusmod dolor excepteur proident proident est. Laboris esse ad elit est occaecat laborum qui dolore quis velit enim ad commodo. Cupidatat ea nisi nisi occaecat veniam tempor labore sit esse. Incididunt cupidatat reprehenderit sit anim aliquip anim culpa in amet incididunt qui velit.',
//                 phone: '+506 2256 7895',
//                 economicCategory: '$$',
//                 imageUrl: 'https://static.wixstatic.com/media/74e708_e126171bd5c2439495f7bd226ba9b298~mv2_d_4856_2731_s_4_2.jpg/v1/fill/w_717,h_403,al_c,q_80,usm_0.66_1.00_0.01/74e708_e126171bd5c2439495f7bd226ba9b298~mv2_d_4856_2731_s_4_2.jpg',
//                 location: {
//                     latitude: 9.933102329459889,
//                     longitude: -84.07883146031479,
//                 }
//             },
//             {
//                 placeName: 'Riverside',
//                 category: 'Restaurante',
//                 isOpen: true,
//                 description: 'Officia eiusmod do ex nisi consequat eu occaecat officia anim mollit do. Cillum Lorem proident dolore id aute mollit ut consequat magna aliquip adipisicing. Eiusmod cupidatat cillum nostrud eiusmod dolor excepteur proident proident est. Laboris esse ad elit est occaecat laborum qui dolore quis velit enim ad commodo. Cupidatat ea nisi nisi occaecat veniam tempor labore sit esse. Incididunt cupidatat reprehenderit sit anim aliquip anim culpa in amet incididunt qui velit.',
//                 phone: '+506 2256 7895',
//                 economicCategory: '$$$',
//                 imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/44/05/75/riverside-marketplace.jpg',
//                 location: {
//                     latitude: 9.933102329459889,
//                     longitude: -84.07883146031479,
//                 }
//             },
//             {
//                 placeName: 'Museo de los Niños',
//                 category: 'Museo',
//                 isOpen: true,
//                 description: 'Officia eiusmod do ex nisi consequat eu occaecat officia anim mollit do. Cillum Lorem proident dolore id aute mollit ut consequat magna aliquip adipisicing. Eiusmod cupidatat cillum nostrud eiusmod dolor excepteur proident proident est. Laboris esse ad elit est occaecat laborum qui dolore quis velit enim ad commodo. Cupidatat ea nisi nisi occaecat veniam tempor labore sit esse. Incididunt cupidatat reprehenderit sit anim aliquip anim culpa in amet incididunt qui velit.',
//                 phone: '+506 2256 7895',
//                 economicCategory: '$$',
//                 imageUrl: 'https://yt3.ggpht.com/a/AATXAJyCvP6aZDz-qqBV86cuCqH8bJUhBpVRlAYnfQ=s900-c-k-c0xffffffff-no-rj-mo',
//                 location: {
//                     latitude: 9.933102329459889,
//                     longitude: -84.07883146031479,
//                 }
//             },
//             {
//                 placeName: 'Museo De Dinosaurios',
//                 category: 'Museo',
//                 isOpen: false,
//                 description: 'Officia eiusmod do ex nisi consequat eu occaecat officia anim mollit do. Cillum Lorem proident dolore id aute mollit ut consequat magna aliquip adipisicing. Eiusmod cupidatat cillum nostrud eiusmod dolor excepteur proident proident est. Laboris esse ad elit est occaecat laborum qui dolore quis velit enim ad commodo. Cupidatat ea nisi nisi occaecat veniam tempor labore sit esse. Incididunt cupidatat reprehenderit sit anim aliquip anim culpa in amet incididunt qui velit.',
//                 phone: '+506 2256 7895',
//                 economicCategory: '$',
//                 imageUrl: 'https://th.bing.com/th/id/OIP.gqFo2t1cQ51Nicna6t6j7wHaFj?pid=ImgDet&rs=1',
//                 location: {
//                     latitude: 9.933102329459889,
//                     longitude: -84.07883146031479,
//                 }
//             },
//         ]
//     }

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        resolve(categories)
    })
}

export const textSearch = (json, text) => {
    return new Promise((resolve, reject) => {
        let searchArr = jp.query(json, "$.results[?(@.placeName =~ /"+text+".*/i )]")
        resolve({results : searchArr})
    })
}

export const getPointsOfInterest = (lat, lon, rad, type) => {
    let loc  = lat+","+lon
    const data = { location : loc, radius : rad, key : process.env.API_KEY, type: type, language : "es"}
    let url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?"+encodeQueryData(data);
    // console.log(url)
    return fetch(url, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(json => {return translateJson(json)})
        .catch(error => console.log(error))
}

function translateJson(json){
    //console.log(json)

    let arrayOfPlaces = []

    let size = jp.query(json, "$.results")[0].length;

    for (let i = 0; i < size; i++) {

        let lat = jp.query(json, "$.results["+i+"].geometry.location.lat")[0];
        let lon = jp.query(json, "$.results["+i+"].geometry.location.lng")[0];
        let name = jp.query(json, "$.results["+i+"].name")[0];
        let types = jp.query(json, "$.results["+i+"].types")[0];

        let imgUrl = null;
        let photoReference = jp.query(json, "$.results["+i+"].photos[0].photo_reference");
        if(!isArrayEmpty(photoReference)){
            imgUrl =    "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+
                photoReference[0]+
                "&key="+process.env.API_KEY;
        }

        let isOpen = null
        let isOpenArr = jp.query(json, "$.results["+i+"].opening_hours.open_now");
        if(!isArrayEmpty(isOpenArr)){
            isOpen = isOpenArr[0]
        }

        let priceLevel = null
        let priceLevelVal = jp.query(json, "$.results["+i+"].price_level");
        if(!isArrayEmpty(priceLevelVal)){
            priceLevel = priceLevelVal[0]
        }

        let appendVal = {
            placeName: name,
            category : types,
            isOpen : isOpen,
            economicCategory : priceLevel,
            imageUrl : imgUrl,
            location : { latitude : lat, longitude : lon }
        }

        arrayOfPlaces.push(appendVal)
    }
    return { results : arrayOfPlaces };
}

function encodeQueryData(data) { return new URLSearchParams(data).toString(); }

function isArrayEmpty(array){
    return !(Array.isArray(array) && array.length)
}
