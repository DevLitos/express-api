import express from 'express'
import {
  getUser,
  actUser,
  delUser,
  getUserProfile,
} from '../controllers/user.controller.js'
import { logger } from '../middlewares/logger.js'
import auth from '../middlewares/auth.js'

const router = express.Router()

router.get('/', getUser)

router.put('/:id', logger, actUser)

router.delete('/:id', logger, delUser)

router.get('/profile', auth, getUserProfile)

export default router
