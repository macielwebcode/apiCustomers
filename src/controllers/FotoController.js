import multer from 'multer'
import multerConfig from '../config/multerConfig'

import Foto from '../models/Foto'

const upload = multer(multerConfig).single('arquivo')

class FotoController{
    store(req, res){
        
        return upload(req, res, async (error) =>{
            if(error){
                return res.status(400).json({
                    errors: [err.code]
                })
            }
            try {
               
                const filename = req.file.filename
                const originalname = req.file.originalname
                const customerId = req.body.customer_id

                
            //    console.log(req.file)
            //    console.log(req.body.customer_id)

                const foto = await Foto.create({ 
                    originalnome: originalname, 
                    filename: filename, 
                    customer_id: customerId 
                })
                
                return res.json(foto)

            } catch (error) {
                return res.status(400).json({
                    errors: 'customer não existe'
                })
            }
       })
    }
}

export default new FotoController()