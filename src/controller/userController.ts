import { Request, Response } from 'express'
import { UserModel } from '../models/UserModel'
 
class UserController {

  async findAll(req: Request, res: Response) {
    const users = await UserModel.findAll()
    // console.log(users)
    return res.status(204).json(users)
  }
  async findOne(req: Request, res: Response) {
    const { id } = req.params
    console.log(id)
    const user = await UserModel.findOne({
      where: {
        id: id
      },
    })
    res.status(200).json(user)
  }

  async create(req: Request, res: Response) {

    const { name, email } = req.body
    const user = await UserModel.create({
      name,
      email
    })
    res.status(201).json(user)
  }

  async update(req: Request, res: Response) {}

  async destroy(req: Request, res: Response) {}

}

export default new UserController()