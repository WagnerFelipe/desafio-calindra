class InvalidLogin extends Error {
  constructor (...args) {
    super(...args)
    Error.captureStackTrace(this, InvalidLogin)
  }

  get status () {
    return 401
  }
  get msg () {
    return 'Usuário ou senha inválido'
  }
}

module.exports = InvalidLogin
