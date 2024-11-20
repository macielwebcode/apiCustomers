import Sequelize, { Model } from 'sequelize';

export default class Demanda extends Model{
    static init(sequelize){
        super.init({
            title: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate:{
                    len:{
                        args: [3, 150],
                        msg: 'Title precisa ter entre 3 e 150 caracteres',
                    },
                }
            },
            description: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate:{
                    len:{
                        args: [3, 300],
                        msg: 'Title precisa ter entre 3 e 300 caracteres',
                    },
                },
            },
            estimativa: {
                type: Sequelize.INTEGER,
                defaultValue: '',
                validate: {
                    isInt:{
                        msg: 'Não é valor Inteiro'
                    }
                
                },
            },
            reference: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate:{
                    len:{
                        args: [3, 300],
                        msg: 'Reference precisa ter entre 3 e 300 caracteres',
                    },
                },
            },

        }, {
            sequelize,
        });
        return this;

    }
}