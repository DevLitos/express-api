import express from 'express'
import morgan from 'morgan'

import router from './router/user.routes.js'
import { logger } from './middlewares/logger.js'

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

app.use('/users', router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
