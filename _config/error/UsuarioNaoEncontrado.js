class UsuarioNaoEncontrado extends Error {
  constructor (...args) {
    super(...args)
    Error.captureStackTrace(this, UsuarioNaoEncontrado)
  }

  get status () {
    return 400
  }
  get msg () {
    return 'Usuário não encontrado'
  }
}

module.exports = UsuarioNaoEncontrado
