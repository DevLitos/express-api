import express from 'express'
import morgan from 'morgan'

import executeEvery5Minutes from './cron/cron.js'
import { logger } from './middlewares/logger.js'
import router from './routes/index.router.js'

const app = express()

//MIDDLEWARE {

// Transforma el body del objeto en un json reconocible para node
app.use(express.json())

app.use(morgan('dev'))
app.use(logger)

// } MIDDLEWARE

const PORT = process.env.PORT || 3000

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
  })
})

app.use('/', router)

dbConnection()
  .then(() => {
    console.log('Conexión a la base de datos establecida')
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error)
  })

executeEvery5Minutes()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
