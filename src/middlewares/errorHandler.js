export const errorHandler = (err, req, res, __next) => {
  console.error(err.stack)
  res.status(500).json({
    error: 'Ocurrió un error en el servidor',
  })
}
export default errorHandler
