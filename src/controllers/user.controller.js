import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

export const getUser = (req, res) => {
  const users = User.find()
  res.json({
    status: 'success',
    message: 'Todos los usuarios',
  })
}

export const actUser = async (req, res) => {
  const { id } = req.params
  const { email, password } = req.body
  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await User.findByIdAndUpdate(
    id,
    { $set: { email, password: hashedPassword } },
    {
      new: true,
      runValidators: true,
    }
  )
  res.json(user)
}

export const delUser = (req, res) => {
  const user = User.deleteOne(id)
  res.json(user)
}

// Devuelve el perfil del usuario autenticado.
export const getUserProfile = async (req, res) => {
  const user = await User.find({ email: req.user.email })
  res.json(user)
}
