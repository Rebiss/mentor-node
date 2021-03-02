import Router from 'express'
import PostController  from '../controller/post.controller.js';

const postRouter = new Router();

postRouter.post('/post', PostController.createPost)
postRouter.get('/post', PostController.getPostsByUser)

export default postRouter;