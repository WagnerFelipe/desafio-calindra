class ResponderForaDoPrazo extends Error {
  constructor (...args) {
    super(...args)
    Error.captureStackTrace(this, ResponderForaDoPrazo)
  }

  get status () {
    return 403
  }
  get msg () {
    return 'Não foi possivel salvar a resposta da questão, pois o prazo de realização do simulado expirou.'
  }
}

module.exports = ResponderForaDoPrazo
