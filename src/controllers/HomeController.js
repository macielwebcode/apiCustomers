import Customer from '../models/Customer'


class HomeController{
    async index(req, res){
        res.send('ook')
        /*const newCustomer = await Customer.create({
            nome: 'Babi',
            sobrenome: 'Maciel',
            email: 'fmbergamo@gmail.com'
        });
        res.json(newCustomer)*/
    }
}

export default new HomeController();