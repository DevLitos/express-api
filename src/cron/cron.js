import cron from 'node-cron'

// Ejecutar una tarea cada 5 minutos
export const executeEvery5Minutes = () => {
  cron.schedule('*/5 * * * *', () => {
    console.log('Ejecutando tarea cada 5 minutos')
  })
}
