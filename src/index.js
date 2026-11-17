import express from 'express'

// import { executeEvery5Minutes } from './cron/cron.js'
import { logger } from './middlewares/logger.js'
import router from './routes/index.router.js'
import errorHandler from './middlewares/errorHandler.js'
import { dbConnection } from './config/db.js'

const app = express()

//MIDDLEWARE {

// Transforma el body del objeto en un json reconocible para node
app.use(express.json())

app.use(logger)

// } MIDDLEWARE

const PORT = process.env.PORT || 3000

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
  })
})

app.use('/', router)

// middleware de manejo de errores
app.use(errorHandler)

dbConnection()
  .then(() => {
    console.log('Conexión a la base de datos establecida')
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch((error) => {
    // Manejo del error lanzado por dbConnection
    console.error('Error al conectar a la base de datos:', error)
  })

//executeEvery5Minutes()
