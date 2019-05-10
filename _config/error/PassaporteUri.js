class PassaporteUri extends Error {
  constructor (...args) {
    super(...args)
    Error.captureStackTrace(this, PassaporteUri)
  }

  get status () {
    return 500
  }
  get msg () {
    return 'Erro ao consultar serviço'
  }
}

module.exports = PassaporteUri
