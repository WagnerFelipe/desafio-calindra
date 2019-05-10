class DesempenhoSimuladoNaoFinalizado extends Error {
  constructor (...args) {
    super(...args)
    Error.captureStackTrace(this, DesempenhoSimuladoNaoFinalizado)
  }

  get status () {
    return 403
  }
  get msg () {
    return 'Não é possível obter o desempenho em um simulado não finalizado'
  }
}

module.exports = DesempenhoSimuladoNaoFinalizado
