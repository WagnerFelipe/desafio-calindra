const endpointGoogle = 'https://maps.googleapis.com/maps/api/geocode/json'
const apiKey = 'AIzaSyBT_lqHgbaYz4A5f_5dp9y2lvRxMadpkeI'
const axios = require('axios')

module.exports = (endereco) => new Promise((resolve, reject) => {
  const params = {
    address: endereco,
    key: apiKey
  }
  axios
    .get(endpointGoogle, { params })
    .then(res => {
      if (res.data.status !== 'REQUEST_DENIED') {
        resolve(res.data)
      } else {
        reject(new Error())
      }
    })
    .catch(err => reject(err))
})
