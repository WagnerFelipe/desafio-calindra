class ExclusaoNaoPermitida extends Error {
  constructor (...args) {
    super(...args)
    Error.captureStackTrace(this, ExclusaoNaoPermitida)
  }

  get status () {
    return 403
  }
  get msg () {
    return 'Exclusão não permitida'
  }
}

module.exports = ExclusaoNaoPermitida
