import Demanda from '../models/Demanda'


class DemandaController{
    async index(req, res){
        const demandas = await Demanda.findAll()
        return res.json(demandas)
    }

    async store(req, res){
        try {
            
            const newDemanda = await Demanda.create(req.body)
            
            return res.json(newDemanda)

        } catch (e) {
            return res.status(400).json(e.message)
        }
    }

    async update(req, res){
        try {
            const { id } = req.params;

            if(!id){
                return res.status(400).json({
                    error: ['Faltando o id']
                })
            }

            const demanda = await Demanda.findByPk(id)

            

            if(!demanda){
                return res.status(400).json({
                    error: ['Demanda não foi atualizada']
                })
            }

            const demandaUpdated = await Demanda.update(req.body)

            return res.json(demandaUpdated)

        } catch (e) {
            return res.status(400).json('erro')
        }
    }

    async show(req, res){
        try {
            const { id } = req.params;

            if(!id){
                return res.status(400).json({
                    error: ['Faltando o id']
                })
            }

            const demanda = await Demanda.findByPk(id)

            if(!demanda){
                return res.status(400).json({
                    error: ['Demanda não existe']
                })
            }

            return res.json(demanda)

        } catch (e) {
            return res.status(400).json('erro')
        }
    }

    async delete(req, res){
        try {
            const { id } = req.params;

            if(!id){
                return res.status(400).json({
                    error: ['Faltando o id']
                })
            }

            const demanda = await Demanda.findByPk(id)

            if(!demanda){
                return res.status(400).json({
                    error: ['Demanda não existe']
                })
            }
            await demanda.destroy()
            return res.json({
                apagado: 'true'
            })

        } catch (e) {
            return res.status(400).json('erro')
        }
    }

}

export default new DemandaController();