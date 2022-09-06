const data = [
  { url: 'https://i5.walmartimages.com/asr/4d466902-e3ad-4037-a556-aebfb90cf32b.5670f5acc8b49302d4139358fc30a369.jpeg' },
  { url: 'https://www.x-one.asia/wp-content/uploads/2020/10/Phone-Models-iPhone-12-Mini.jpg' },
  { url: 'https://cdn.cdon.com/media-dynamic/images/product/cloud/store/CellPhones/000/079/710/654/79710654-139884036-11453-org.jpg' }
]

const getDeviceImages = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 333)
  })
}

export default getDeviceImages
