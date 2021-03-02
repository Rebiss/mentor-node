import Router from 'express'
import UserController  from '../controller/user.controller.js';

const userRouter = new Router();

userRouter.post('/user', UserController.createUser)
userRouter.get('/user', UserController.getUsers)
userRouter.get('/user/:id', UserController.getOneUser)
userRouter.put('/user', UserController.updateUser)
userRouter.delete('/user/:id', UserController.deleteUser)

export default userRouter;