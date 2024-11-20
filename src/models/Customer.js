import Sequelize, { Model } from 'sequelize';

export default class Customer extends Model{
    static init(sequelize){
        super.init({
            nome: Sequelize.STRING,
            sobrenome: Sequelize.STRING,
            email: Sequelize.STRING,

        }, {
            sequelize,
        });
        return this;

    }
    static associate(models){
        this.hasMany(models.Foto, { foreignKey: 'customer_id' })
    }
}