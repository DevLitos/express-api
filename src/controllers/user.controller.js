import { logger } from './middlewares/logger.js'

export const getUser = (req, res) => {
  res.json({
    status: 'success',
    message: 'Todos los usuarios',
  })
}

export const createUser = (req, res) => {
  console.log(req.body)
  res.status(201).json('usuario creado')
}

export const actUser =
  ('/:id',
  logger,
  (req, res) => {
    console.log(req.params.id)
    res.json('Usuario actualizado')
  })

export const delUser =
  ('/:id',
  logger,
  (req, res) => {
    console.log(req.params.id)

    res.json('Usuario eliminado')
  })
