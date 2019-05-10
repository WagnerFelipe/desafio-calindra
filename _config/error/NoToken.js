class NoToken extends Error {
  constructor (...args) {
    super(...args)
    Error.captureStackTrace(this, NoToken)
  }

  get status () {
    return 400
  }
  get msg () {
    return 'Não há token na requisição'
  }
}

module.exports = NoToken
