const data = {
  imageURL: '../../assets/images/Factura.png'
}

const getServerData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 333)
  })
}

export default getServerData
