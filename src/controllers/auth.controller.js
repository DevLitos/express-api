import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({
      error: 'Email y contraseña son requeridos',
    })
  }

  const hashedPassword = bcrypt.hashSync(password, 10)
  const user = await User.create({ email, password: hashedPassword })

  res.status(201).json({
    message: 'Usuario registrado correctamente',
    user: {
      email: user.email,
      id: user._id,
    },
  })
}

export const login = (req, res) => {
  res.json('Usuario logueado correctamente')
}
