import Sequelize, { Model } from 'sequelize';

export default class DemandaModel extends Model{
    static init(sequelize){
        super.init({
            title: Sequelize.STRING,
            description: Sequelize.STRING,
            estimativa: Sequelize.INTEGER,
            reference: Sequelize.STRING,

        }, {
            sequelize,
        });
        return this;

    }
}