class QuestaoValidacaoNaoPermitida extends Error {
  constructor (...args) {
    super(...args)
    Error.captureStackTrace(this, QuestaoValidacaoNaoPermitida)
  }

  get status () {
    return 403
  }
  get msg () {
    return 'A questão não está na etapa de validação colaborativa!'
  }
}

module.exports = QuestaoValidacaoNaoPermitida
