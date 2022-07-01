import express from 'express'
import UserController from './controller/UserController'

const router = express.Router()

router.get('/users', UserController.findAll)
router.get('/users/:userId', UserController.findOne)
router.post('/users', UserController.create)
router.put('/users/:userId', UserController.update)
router.delete('/users/:userId', UserController.destroy)

export { router }