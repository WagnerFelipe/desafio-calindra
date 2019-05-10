const googleApi = require('./../inc/googleApi')

const obterDistanciaEuclidiana = (lat1, lon1, lat2, lon2) => {
  const R = 6371
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLon = (lon2 - lon1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const d = R * c
  return d
}

const ordenaDistancias = (a, b) => {
  if (a.distancia > b.distancia) {
    return 1
  }
  if (a.distancia < b.distancia) {
    return -1
  }
  return 0
}

const obterListaDeDistancias = (item, resultadosGoogleApi) => {
  const arrayDeDistancias = []
  const matrizDistancias = []
  const enderecoOrigem = item.results[0].geometry.location
  const originPlaceId = item.results[0].place_id

  resultadosGoogleApi.forEach(r => {
    const destPlaceId = r.results[0].place_id
    if (originPlaceId !== destPlaceId) {
      const enderecoDestino = r.results[0].geometry.location
      const distanciaEuclidiana = obterDistanciaEuclidiana(enderecoOrigem.lat, enderecoOrigem.lng, enderecoDestino.lat, enderecoDestino.lng)

      arrayDeDistancias.push({
        endereco: r.results[0].formatted_address,
        distancia: distanciaEuclidiana
      })

      matrizDistancias.push({
        endereco1: item.results[0].formatted_address,
        endereco2: r.results[0].formatted_address,
        distancia: distanciaEuclidiana
      })
    }
  })

  arrayDeDistancias.sort(ordenaDistancias)

  return { arrayDeDistancias, matrizDistancias }
}

module.exports = (listaDeEnderecos) => new Promise((resolve, reject) => {
  const _promissesBuscaGoogle = listaDeEnderecos.map(end => googleApi(end))
  let _matrizDistancia = []

  Promise.all(_promissesBuscaGoogle)
    .then(resultadosGoogleApi => {

      const distancias = resultadosGoogleApi.map(item => {
        const { arrayDeDistancias, matrizDistancias } = obterListaDeDistancias(item, resultadosGoogleApi)

        _matrizDistancia = _matrizDistancia.concat(matrizDistancias)

        return {
          endereco: item.results[0].formatted_address,
          distancias: arrayDeDistancias
        }
      })

      const matriz = _matrizDistancia
        .reduce((acc, item) => {
          if (!acc.some(m => m.distancia === item.distancia)) {
            acc.push(item)
          }
          return acc
        }, [])

      matriz.sort(ordenaDistancias)

      resolve({ distancias, matriz })
    })
    .catch(err => reject(err))
})
