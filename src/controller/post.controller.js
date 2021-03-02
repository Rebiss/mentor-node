import {db} from '../db/db.js'

class PostController {
    async createPost(req,res){
        const {title, content, userId} = req.body;
        const newPost = await db.query(`INSERT INTO post (title, content, userId) values ($1, $2, $3) RETURNING *`, [title, content, userId]);
        res.json(newPost.rows[0]);
    }

    async getPostsByUser(req,res) {
        const {id} = req.params;
        const posts = await db.query(`SELECT * FROM post WHERE user_id = $1 `, [id])
        res.json(posts.rows);
    }

}


export default new PostController;