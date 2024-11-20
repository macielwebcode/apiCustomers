import dotenv from 'dotenv'

dotenv.config()

import './src/database';

import express from 'express'
import homeRoutes from './src/routes/homeRoutes'
import userRoutes from './src/routes/userRoutes'
import tokenRoutes from './src/routes/tokenRoutes'
import demandaRoutes from './src/routes/demandaRoutes'
import fotoRoutes from './src/routes/fotoRoutes'
import customerRoutes from './src/routes/customerRoutes'

class App{
    constructor(){
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json())
    }

    routes(){
        this.app.use('/', homeRoutes)
        this.app.use('/users/', userRoutes)
        this.app.use('/tokens/', tokenRoutes)
        this.app.use('/demandas/', demandaRoutes)
        this.app.use('/fotos/', fotoRoutes)
        this.app.use('/customers/', customerRoutes)
    }
}

export default new App().app;