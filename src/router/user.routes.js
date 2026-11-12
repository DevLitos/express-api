import express from 'express'
import {
  getUser,
  createUser,
  actUser,
  delUser,
} from '../controllers/user.controller.js'

const router = express.Router()

router.get('/', getUser)

router.post('/', createUser)

router.put('/:id', actUser)

router.delete('/:id', delUser)

export default router
