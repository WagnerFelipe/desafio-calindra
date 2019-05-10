module.exports = (err, req, res, next) => {
  console.log(err)
  if (err.status) {
    res.status(err.status).json({msg: err.msg})
  } else {
    res.status(500).json({msg: `Erro genérico`})
  }
}
