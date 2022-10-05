const data = ['Cerca de mí', 'Restaurantes', 'Tiendas', 'Centros Culturales', 'Museos']

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(data)
        }, 333)
      })
}