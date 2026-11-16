import User from '../models/user.model.js'
import dbConnection from '../config/db.js'

export const register = async (req, res) => {
  try {
    const { email, password } = req.body

    await User.create({ email, password })

    res.status(201).json({
      message: 'Usuario registrado correctamente',
    })
  } catch (error) {
    res.status(500).json({
      error: error.message,
    })
  }
}

export const login = (req, res) => {
  res.json('Usuario logueado correctamente')
}
