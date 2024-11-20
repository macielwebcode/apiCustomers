import Customer from '../models/Customer'
import Foto from '../models/Foto'

class CustomerController{
    async store(req, res){
        try {
            const newUser = await Customer.create(req.body);
            return res.json(newUser)
        } catch (e) {
            return res.send(e)
        }
         
    }

    async index(req, res){
        try {
            const users = await Customer.findAll({
                attributes: ['id', 'nome', 'sobrenome'],
                order: [['id', 'DESC']],
                include:{
                    model: Foto,
                },
            });
            return res.json(users);
        } catch (e) {
            return res.json('erro ao listar customers')
        }
    }

   
 
}

export default new CustomerController();