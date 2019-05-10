class QuestaoNaoEncontrada extends Error {
  constructor (...args) {
    super(...args)
    Error.captureStackTrace(this, QuestaoNaoEncontrada)
  }

  get status () {
    return 400
  }
  get msg () {
    return 'A questão não foi encontrada'
  }
}

module.exports = QuestaoNaoEncontrada
