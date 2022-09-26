const data = ['8:00pm', '8:10pm', '8:20pm', '8:30pm']
  

const getSchedule = (stopId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 333)
    })
  }
  
  export default getSchedule