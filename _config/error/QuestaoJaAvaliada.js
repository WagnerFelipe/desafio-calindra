class QuestaoJaAvaliada extends Error {
  constructor (...args) {
    super(...args)
    Error.captureStackTrace(this, QuestaoJaAvaliada)
  }

  get status () {
    return 403
  }
  get msg () {
    return 'A questão já foi avaliada'
  }
}

module.exports = QuestaoJaAvaliada
