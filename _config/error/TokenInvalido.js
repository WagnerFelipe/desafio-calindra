class TokenInvalido extends Error {
  constructor (...args) {
    super(...args)
    Error.captureStackTrace(this, TokenInvalido)
  }

  get status () {
    return 401
  }
  get msg () {
    return 'Token inválido'
  }
}

module.exports = TokenInvalido
