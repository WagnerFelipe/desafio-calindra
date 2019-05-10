module.exports = (Service) => (req, res, next) => {
  const listaDeEnderecos = req.body.enderecos
  Service.distancia(listaDeEnderecos)
    .then(data => res.status(200).json(data))
    .catch(err => next(err))
}
