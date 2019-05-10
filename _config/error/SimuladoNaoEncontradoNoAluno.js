class SimuladoNaoEncontradoNoAluno extends Error {
  constructor (...args) {
    super(...args)
    Error.captureStackTrace(this, SimuladoNaoEncontradoNoAluno)
  }

  get status () {
    return 403
  }
  get msg () {
    return 'Simulado não encontrado para o aluno'
  }
}

module.exports = SimuladoNaoEncontradoNoAluno
