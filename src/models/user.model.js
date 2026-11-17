import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false, // Esto evita que la contraseña se devuelva en las consultas por defecto
    },
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)

export default User
