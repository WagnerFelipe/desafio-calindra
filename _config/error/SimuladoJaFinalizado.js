class SimuladoJaFinalizado extends Error {
  constructor (...args) {
    super(...args)
    Error.captureStackTrace(this, SimuladoJaFinalizado)
  }

  get status () {
    return 403
  }
  get msg () {
    return 'Este simulado já foi finalizado'
  }
}

module.exports = SimuladoJaFinalizado
