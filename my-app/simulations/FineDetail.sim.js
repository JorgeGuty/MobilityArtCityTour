const data = {
  service: '8403 1342',
  currentPlan: 'PLAN 4G K2-24 M',
  time: '24 meses',
  fees: '13 Cuotas',
  amount: '₡516 430 IVAI'
}

const getServerData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 333)
  })
}

export default getServerData
