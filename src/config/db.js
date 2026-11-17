import mongoose from 'mongoose'

export const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/datata')
  } catch (error) {
    // Throw new Error eleva el error para que pueda ser capturado por el bloque catch en index.js
    throw new Error('Error al cconectarse a la base de datos')
  }
}
