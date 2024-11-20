import Sequelize, { Model } from 'sequelize';

export default class Foto extends Model{
    static init(sequelize){
        super.init({
            originalnome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate:{
                    notEmpty:{
                        msg: 'Campo não pode ser vazio',
                    },
                }
            },
            filename: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate:{
                    notEmpty:{
                        msg: 'Campo não pode ser vazio',
                    },
                }
            },
            customer_id:{
                type: Sequelize.INTEGER,
                defaultValue: '',
            }

        }, {
            sequelize,
            tableName: 'fotos'
        });
        return this;
    }

    static associate(models){
        this.belongsTo(models.Customer, { foreignKey: 'customer_id' })
    }
}