import { Request, Response } from 'express'
import { UserModel } from '../models/UserModel'
 
class UserController {

  async findAll(req: Request, res: Response) {
    const users = await UserModel.findAll()
    users
    ? res.status(200).json(users)
    : res.status(404).json(null)
  }

  async findOne(req: Request, res: Response) {
    const { userId } = req.params
    console.log(userId)
    const user = await UserModel.findOne({
      where: {
        id: userId
      },
    })
    user
    ? res.status(200).json(user)
    : res.status(404).json(null)
  }

  async create(req: Request, res: Response) {
    const { name, email } = req.body
    const user = await UserModel.create({
      name,
      email
    })
    res.status(201).json(user)
  }

  async update(req: Request, res: Response) {
    const { userId } = req.params
    const newUser =  await UserModel.update(req.body, {
      where: {
        id: userId
      }
    })
    newUser
    ? res.status(204).json(newUser)
    : res.status(404).json(null)
  }
  
  async destroy(req: Request, res: Response) {
    const { userId } = req.params
    const deletedUser = await UserModel.destroy({
      where: {
        id: userId
      }
    })
    deletedUser
    ? res.status(200).json(deletedUser)
    : res.status(404).json(null)
  }

}

export default new UserController()