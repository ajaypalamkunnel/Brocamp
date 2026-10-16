import express from 'express'
import { signUpPage } from '../controller/userController.js'
const userRouter    = express.Router()



userRouter.get('/signUp',signUpPage)


export default userRouter