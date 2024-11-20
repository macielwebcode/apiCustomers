import User from '../models/User'


class UserController{
    async store(req, res){
        try {
            const newUser = await User.create(req.body);
            return res.json(newUser)
        } catch (e) {
            return res.send(e)
        }
         
    }

    async index(req, res){
        try {
            const users = await User.findAll();
            return res.json(users);
        } catch (e) {
            return res.json(null)
        }
    }

    async show(req, res){
        try {
            const iduser = req.params.id
            const user = await User.findByPk(iduser);
            return res.json(user);
        } catch (e) {
            return res.json(null)
        }
    }

    async update(req, res){
        try {
            const iduser = req.userId
            
            const user = await User.findByPk(iduser);
            
            if(!user) return res.status(400).json({
                errors: ['User não existe']
            })

            const userput = await user.update(req.body)

            return res.json(userput);
        } catch (e) {
            return res.json(null)
        }
    }

    async delete(req, res){
        try {
           
            const user = await User.findByPk(req.userId);
 
            if(!user) return res.status(400).json({
                errors: ['User não existe']
            })

            await user.destroy()

            return res.json('Usuário apagado com sucesso');
        } catch (e) {
            return res.json(null)
        }
    }
}

export default new UserController();