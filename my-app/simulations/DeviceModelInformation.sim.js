const data = {
  brand: 'Samsung',
  model: 'Galaxy S22',
  rating: 4.4

}

const getDeviceModelInformation = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 333)
  })
}

export default getDeviceModelInformation
