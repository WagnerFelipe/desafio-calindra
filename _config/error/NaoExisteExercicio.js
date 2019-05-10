class NaoExisteMaisQuestao extends Error {
  constructor (...args) {
    super(...args)
    Error.captureStackTrace(this, NaoExisteMaisQuestao)
  }

  get status () {
    return 400
  }
  get msg () {
    console.log('teste')
    return 'Não existe mais questões!'
  }
}

module.exports = NaoExisteMaisQuestao
