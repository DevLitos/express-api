export const getUser = (req, res) => {
  res.json({
    status: 'success',
    message: 'Todos los usuarios',
  })
}

export const createUser = (req, res) => {
  res.status(201).json('usuario creado')
}

export const actUser = (req, res) => {
  res.json('Usuario actualizado')
}

export const delUser = (req, res) => {
  res.json('Usuario eliminado')
}
