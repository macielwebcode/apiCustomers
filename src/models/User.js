import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model{
    static init(sequelize){
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 80],
                        msg: 'Nome deve ter entre 3 e 80 caracteres',
                    }
                }
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    isEmail: {
                        msg: 'Email inválido',
                    }
                }
            },
            password_hash: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
            password: {
                type: Sequelize.VIRTUAL,
                defaultValue: '',
                validate: {
                    len: {
                        args: [6, 13],
                        msg: 'A senha deve ter entre 6 e 12 caracteres'
                    }
                }
            },

        }, {
            sequelize,
        });

        this.addHook('beforeSave', async (user) => {
            if(user.password){
                user.password_hash = await bcryptjs.hash(user.password, 8);
            }
            
        })
        return this;
    }

    passIsValid(passowrd){
        return bcryptjs.compare(passowrd, this.password_hash)
    }
}