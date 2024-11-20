import Sequelize from 'sequelize'
import dataBaseConfig from '../config/database'
import Customer from '../models/Customer'
import User from '../models/User'
import Foto from '../models/Foto'
import Demanda from '../models/Demanda'

const models = [Customer, User, Foto, Demanda];


const connection = new Sequelize(dataBaseConfig)

models.forEach((model) => model.init(connection))
models.forEach((model) => model.associate && model.associate(connection.models))