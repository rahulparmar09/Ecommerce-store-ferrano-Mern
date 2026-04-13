import express from 'express';
import { loginUser, registerUser, adminLogin, gettotalUser } from '../controllers/userController.js';    


const userRouter = express.Router();

userRouter.post('/register', registerUser); // Route for user registration
userRouter.post('/login', loginUser); // Route for user login       
userRouter.post('/admin', adminLogin); // Route for admin login


userRouter.get('/get-total', gettotalUser); // Route for total users



export default userRouter;
