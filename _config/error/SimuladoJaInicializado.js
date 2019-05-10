class SimuladoJaInicializado extends Error {
  constructor (...args) {
    super(...args)
    Error.captureStackTrace(this, SimuladoJaInicializado)
  }

  get status () {
    return 403
  }
  get msg () {
    return 'Este simulado já foi inicializado, portanto não pode ser excluído.'
  }
}

module.exports = SimuladoJaInicializado
