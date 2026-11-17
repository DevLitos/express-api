import express from 'express'
import { getUser, actUser, delUser } from '../controllers/user.controller.js'
import { logger } from '../middlewares/logger.js'

const router = express.Router()

router.get('/', getUser)

router.put('/:id', logger, actUser)

router.delete('/:id', logger, delUser)

export default router
