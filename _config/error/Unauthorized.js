class Unauthorized extends Error {
  constructor (...args) {
    super(...args)
    Error.captureStackTrace(this, Unauthorized)
  }

  get status () {
    return 401
  }
  get msg () {
    return 'Acesso não autorizado'
  }
}

module.exports = Unauthorized
