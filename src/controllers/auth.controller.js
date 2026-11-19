import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// Registra un usuario almacenando su contraseña de forma segura.
export const register = async (req, res) => {
  const { email, password } = req.body

  // Se evita crear usuarios incompletos antes de consultar o modificar la base de datos.
  if (!email || !password) {
    return res.status(400).json({
      error: 'Email y contraseña son requeridos',
    })
  }

  // El factor de coste 10 aumenta el trabajo necesario para cada hash y dificulta ataques por fuerza bruta.
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

// Comprueba las credenciales del usuario y devuelve sus datos públicos.
export const login = async (req, res) => {
  const { email, password } = req.body

  // Primero se busca la cuenta para poder comparar la contraseña almacenada.
  const user = await User.findOne({ email }).select('+password')

  if (!user) {
    return res.status(404).json({
      error: 'Invalid email or password',
    })
  }

  // bcrypt compara la contraseña recibida con el hash sin exponer la contraseña original.
  const passwordMatch = bcrypt.compareSync(password, user.password)
  if (!passwordMatch) {
    return res.status(401).json({
      error: 'Invalid email or password',
    })
  }

  //Primero la info que queremos guardar en el token, luego la clave secreta y por último las opciones de expiración.
  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1h',
    }
  )

  res.status(200).json({
    message: 'Usuario logueado correctamente',
    user: {
      email: user.email,
      token,
    },
  })
}
