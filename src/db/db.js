import pg from 'pg'
import {pgConfig} from './config/pg.config.js'

export const db =  new pg.Pool(pgConfig);