import express from 'express'
import morgan from 'morgan'

const app = express()

//MIDDLEWARE {

// Transforma el body del objeto en un json reconocible para node
app.use(express.json())

app.use(morgan('dev'))

// } MIDDLEWARE

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Hello, World!',
  })
})

app.get('/users', (req, res) => {
  res.json({
    status: 'success',
    data: [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
    ],
  })
})

app.post('/users', (req, res) => {
  console.log(req.body)
  res.status(201).json('usuario creado')
})

app.put('/users/:id', (req, res) => {
  console.log(req.params.id)
  res.json('Usuario actualizado')
})

app.delete('/users/:id', (req, res) => {
  console.log(req.params.id)

  res.json('Usuario eliminado')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
