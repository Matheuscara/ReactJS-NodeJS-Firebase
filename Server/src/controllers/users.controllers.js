
const Usuario = require('../models/users.modells');


module.exports = {

    // Lista todos os Usuarios
    async index(require, response) {
        const user = await Usuario.find();
        response.json(user)
    },

    // Cria um usuario
    async create(request,response){
        const {nome_usuario, email_usuario, senha_usuario} = request.body;
        let data = {};
        let user =  await Usuario.findOne({email_usuario});
        
        if(!user){
            data = {nome_usuario, email_usuario, senha_usuario};

            user = await Usuario.create(data);
            
            return response.status(200).json(user);
            
        }else{
            return response.status(200).json({ message: 'Error' });
        }
    },

    // Mostra um usuario
    async details(request, response) {
        const {nome_usuario} = request.params;
        const user = await Usuario.findOne({nome_usuario});
        response.json(user)
    },

    // Deleta um usuario
    async delete(request,response){
        const { _id } = request.params;
        const user = await Usuario.findByIdAndDelete({_id});
        return response.json(user);
    },
};