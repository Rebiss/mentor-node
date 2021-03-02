import {db} from '../db/db.js'
import {createQuery} from '../db/sql/create.user.js'

class UserController {
    /**
     * Create User in database:
     * @param {*} req 
     * @param {*} res 
     */
    async createUser(req,res) {
        const {name, surname} = req.body;
        const newPerson = await db.query(`INSERT INTO person (name, surname) values ($1, $2) RETURNING *`, [name, surname]);
        res.json(newPerson.rows);
    }

    /**
     * Return Users is Database:
     * @param {*} req 
     * @param {*} res 
     */
    async getUsers(req, res) {
        const users = await db.query(`SELECT * FROM person`)
        res.json(users.rows);
    }

    /**
     * Return One User is Database Postgres:
     * @param {*} req 
     * @param {*} res 
     */
    async getOneUser(req, res) {
        const {id} = req.params;
        const user = await db.query(`SELECT * FROM person where id = $1`, [id]);
        res.json(user.rows[0]);
    }

    /**
     * Update User:
     * @param {*} req 
     * @param {*} res 
     */
    async updateUser(req, res) {
        const {id, name, surname} = req.body;
        const user = await db.query(`UPDATE person set name = $1, surname = $2, id = $3 RETURNING *`, [name, surname, id]);
        res.json(user.rows[0])
    }

    /**
     * Delte User:
     * @param {*} req 
     * @param {*} res 
     */
    async deleteUser(req,res) {
        const {id} = req.params;
        const user = await db.query(`DELETE FROM person whare id = $1 `, [id])
        res.json(user.rows[0])
    }
}

export default new UserController;