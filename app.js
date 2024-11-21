import dotenv from 'dotenv'

dotenv.config()

import './src/database';

import express from 'express'
import cors from 'cors'
import helmet from 'helmet';

import homeRoutes from './src/routes/homeRoutes'
import userRoutes from './src/routes/userRoutes'
import tokenRoutes from './src/routes/tokenRoutes'
import demandaRoutes from './src/routes/demandaRoutes'
import fotoRoutes from './src/routes/fotoRoutes'
import customerRoutes from './src/routes/customerRoutes'

//colocar aqui os dominios permitidos
const whiteList = [
    'http://localhost:3000'
]

//origin é setado pelo browser
const corsOptions = {
    origin: function(origin, callback){
        if(whiteList.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        }else{
            callback(new Error('Not allowed by CORS'))
        }
    }
}

class App{
    constructor(){
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use(cors(corsOptions))
        this.app.use(helmet())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json())
        // this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads, images')))
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