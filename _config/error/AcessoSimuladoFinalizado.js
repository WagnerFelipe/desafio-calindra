class AcessoSimuladoFinalizado extends Error {
  constructor (...args) {
    super(...args)
    Error.captureStackTrace(this, AcessoSimuladoFinalizado)
  }

  get status () {
    return 403
  }
  get msg () {
    return 'Este simulado já foi finalizado'
  }
}

module.exports = AcessoSimuladoFinalizado
